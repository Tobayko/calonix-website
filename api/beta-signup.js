const nodemailer = require('nodemailer');

const ALLOWED_ROLES = new Set([
    'SHK-Handwerker',
    'TGA-Planer',
    'Energieberater',
    'Sonstiges',
]);

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

    try {
        const body = parseBody(req);
        const email = normalizeValue(body.email, 254).toLowerCase();
        const company = normalizeValue(body.company, 160);
        const requestedRole = normalizeValue(body.role, 80);
        const role = ALLOWED_ROLES.has(requestedRole) ? requestedRole : 'Sonstiges';
        const website = normalizeValue(body.website, 200);

        // Honeypot field for basic bot filtering.
        if (website) {
            return json(res, 200, { ok: true });
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
        console.error('beta-signup mail error', error);
        return json(res, 500, {
            ok: false,
            error: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es gleich noch einmal.',
        });
    }
};
