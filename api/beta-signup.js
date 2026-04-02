const nodemailer = require('nodemailer');

const ALLOWED_ROLES = new Set([
    'SHK-Handwerker',
    'TGA-Planer',
    'Energieberater',
    'Sonstiges',
]);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map();

function json(res, statusCode, payload) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify(payload));
}

function parseBody(req) {
    if (!req.body) {
        return {};
    }

    if (typeof req.body === 'string') {
        try {
            return JSON.parse(req.body);
        } catch {
            return {};
        }
    }

    return req.body;
}

function normalizeValue(value, maxLength) {
    return String(value ?? '').trim().slice(0, maxLength);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(req) {
    const forwardedFor = req.headers['x-forwarded-for'];

    if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
        return forwardedFor.split(',')[0].trim();
    }

    return req.socket?.remoteAddress || 'unknown';
}

function cleanupRateLimitStore(now) {
    for (const [ip, timestamps] of rateLimitStore.entries()) {
        const recentTimestamps = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

        if (recentTimestamps.length === 0) {
            rateLimitStore.delete(ip);
            continue;
        }

        rateLimitStore.set(ip, recentTimestamps);
    }
}

function isRateLimited(ip, now) {
    cleanupRateLimitStore(now);

    const timestamps = rateLimitStore.get(ip) || [];
    const recentTimestamps = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

    if (recentTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
        rateLimitStore.set(ip, recentTimestamps);
        return true;
    }

    recentTimestamps.push(now);
    rateLimitStore.set(ip, recentTimestamps);
    return false;
}

function getAllowedOrigins(req) {
    const configuredOrigins = String(process.env.BETA_FORM_ALLOWED_ORIGINS || '')
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean);
    const host = req.headers.host ? `https://${req.headers.host}` : '';

    return new Set(host ? [...configuredOrigins, host] : configuredOrigins);
}

function isAllowedOrigin(req) {
    const origin = req.headers.origin;

    if (!origin) {
        return true;
    }

    return getAllowedOrigins(req).has(origin);
}

function getRequiredEnv(name) {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }

    return value;
}

function createTransporter() {
    const port = Number(process.env.ZOHO_SMTP_PORT || 465);
    const secure = String(process.env.ZOHO_SMTP_SECURE ?? (port === 465)).toLowerCase() === 'true';

    return nodemailer.createTransport({
        host: getRequiredEnv('ZOHO_SMTP_HOST'),
        port,
        secure,
        auth: {
            user: getRequiredEnv('ZOHO_SMTP_USER'),
            pass: getRequiredEnv('ZOHO_SMTP_PASS'),
        },
    });
}

function buildPlainTextMail({ email, company, role }) {
    return [
        'Neue Beta-Anfrage ueber prometo.app',
        '',
        `E-Mail-Adresse: ${email}`,
        `Betriebsname: ${company || '-'}`,
        `Rolle: ${role}`,
        '',
        'Bitte in die Warteliste aufnehmen.',
    ].join('\n');
}

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return json(res, 405, { ok: false, error: 'Method not allowed.' });
    }

    if (!isAllowedOrigin(req)) {
        return json(res, 403, { ok: false, error: 'Unzulaessige Herkunft der Anfrage.' });
    }

    try {
        const body = parseBody(req);
        const email = normalizeValue(body.email, 254).toLowerCase();
        const company = normalizeValue(body.company, 160);
        const requestedRole = normalizeValue(body.role, 80);
        const role = ALLOWED_ROLES.has(requestedRole) ? requestedRole : 'Sonstiges';
        const website = normalizeValue(body.website, 200);
        const clientIp = getClientIp(req);

        // Honeypot field for basic bot filtering.
        if (website) {
            return json(res, 200, { ok: true });
        }

        if (isRateLimited(clientIp, Date.now())) {
            return json(res, 429, {
                ok: false,
                error: 'Zu viele Anfragen in kurzer Zeit. Bitte warte kurz und versuche es erneut.',
            });
        }

        if (!isValidEmail(email)) {
            return json(res, 400, { ok: false, error: 'Bitte gib eine gueltige E-Mail-Adresse ein.' });
        }

        const transporter = createTransporter();
        const smtpUser = getRequiredEnv('ZOHO_SMTP_USER');

        await transporter.sendMail({
            from: process.env.BETA_FORM_FROM || `Prometo Website <${smtpUser}>`,
            to: process.env.BETA_FORM_TO || smtpUser,
            replyTo: email,
            subject: 'Prometo Beta-Anfrage',
            text: buildPlainTextMail({ email, company, role }),
        });

        return json(res, 200, { ok: true });
    } catch (error) {
        console.error('beta-signup mail error', error instanceof Error ? error.message : 'unknown');
        return json(res, 500, {
            ok: false,
            error: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es gleich noch einmal.',
        });
    }
};
