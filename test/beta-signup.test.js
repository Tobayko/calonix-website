const assert = require('node:assert/strict');
const test = require('node:test');

const nodemailer = require('nodemailer');
const handler = require('../api/beta-signup');

const ORIGINAL_ENV = { ...process.env };
const ORIGINAL_CREATE_TRANSPORT = nodemailer.createTransport;

function createRequest({ method = 'POST', headers = {}, body = {}, ip = '127.0.0.1' } = {}) {
    return {
        method,
        headers: {
            host: 'localhost:3000',
            ...headers,
        },
        body,
        socket: {
            remoteAddress: ip,
        },
    };
}

function createResponse() {
    return {
        headers: {},
        setHeader(name, value) {
            this.headers[name] = value;
        },
        end(payload = '') {
            this.payload = payload;
            this.ended = true;
        },
    };
}

function configureZohoEnv() {
    process.env.ZOHO_SMTP_HOST = 'smtp.test.local';
    process.env.ZOHO_SMTP_PORT = '465';
    process.env.ZOHO_SMTP_SECURE = 'true';
    process.env.ZOHO_SMTP_USER = 'info@prometo.app';
    process.env.ZOHO_SMTP_PASS = 'secret';
    process.env.BETA_FORM_TO = 'beta@prometo.app';
    process.env.BETA_FORM_FROM = 'Prometo Website <info@prometo.app>';
    process.env.BETA_FORM_ALLOWED_ORIGINS = 'https://prometo.app';
}

function restoreEnvironment() {
    process.env = { ...ORIGINAL_ENV };
    nodemailer.createTransport = ORIGINAL_CREATE_TRANSPORT;
}

test.afterEach(restoreEnvironment);

test('handles CORS preflight requests', async () => {
    configureZohoEnv();

    const req = createRequest({
        method: 'OPTIONS',
        headers: {
            origin: 'http://localhost:3000',
        },
    });
    const res = createResponse();

    await handler(req, res);

    assert.equal(res.statusCode, 204);
    assert.equal(res.headers['Access-Control-Allow-Origin'], 'http://localhost:3000');
    assert.equal(res.headers['Access-Control-Allow-Methods'], 'POST, OPTIONS');
});

test('rejects invalid email addresses before sending mail', async () => {
    configureZohoEnv();
    let sendMailWasCalled = false;
    nodemailer.createTransport = () => ({
        sendMail: async () => {
            sendMailWasCalled = true;
        },
    });

    const req = createRequest({
        body: {
            email: 'keine-mail',
            company: 'Muster GmbH',
            role: 'SHK-Handwerker',
            privacyConsent: true,
        },
        ip: '127.0.0.2',
    });
    const res = createResponse();

    await handler(req, res);

    assert.equal(res.statusCode, 400);
    assert.equal(sendMailWasCalled, false);
    assert.deepEqual(JSON.parse(res.payload), {
        ok: false,
        error: 'Bitte gib eine gueltige E-Mail-Adresse ein.',
    });
});

test('sends beta signup details through the configured Zoho SMTP account', async () => {
    configureZohoEnv();
    const sentMessages = [];
    const transportOptions = [];

    nodemailer.createTransport = (options) => {
        transportOptions.push(options);
        return {
            sendMail: async (message) => {
                sentMessages.push(message);
                return { messageId: 'test-message-id' };
            },
        };
    };

    const req = createRequest({
        headers: {
            origin: 'https://prometo.app',
        },
        body: {
            email: 'kunde@example.com',
            company: 'Muster GmbH',
            role: 'TGA-Planer',
            monthlyCalculations: '3–5',
            privacyConsent: true,
            website: '',
        },
        ip: '127.0.0.3',
    });
    const res = createResponse();

    await handler(req, res);

    assert.equal(res.statusCode, 200);
    assert.deepEqual(JSON.parse(res.payload), { ok: true });
    assert.deepEqual(transportOptions[0], {
        host: 'smtp.test.local',
        port: 465,
        secure: true,
        auth: {
            user: 'info@prometo.app',
            pass: 'secret',
        },
    });
    assert.equal(sentMessages.length, 1);
    assert.equal(sentMessages[0].from, 'Prometo Website <info@prometo.app>');
    assert.equal(sentMessages[0].to, 'beta@prometo.app');
    assert.equal(sentMessages[0].replyTo, 'kunde@example.com');
    assert.match(sentMessages[0].text, /E-Mail-Adresse: kunde@example\.com/);
    assert.match(sentMessages[0].text, /Betriebsname: Muster GmbH/);
    assert.match(sentMessages[0].text, /Rolle: TGA-Planer/);
    assert.match(sentMessages[0].text, /Heizlastberechnungen pro Monat: 3–5/);
    assert.match(sentMessages[0].text, /Datenschutz-Zustimmung: erteilt/);
});

test('requires company, role and privacy consent before sending mail', async () => {
    configureZohoEnv();
    let sendMailWasCalled = false;
    nodemailer.createTransport = () => ({
        sendMail: async () => {
            sendMailWasCalled = true;
        },
    });

    const req = createRequest({
        body: {
            email: 'kunde@example.com',
            company: 'Muster GmbH',
            role: 'Projektleitung',
            privacyConsent: false,
        },
        ip: '127.0.0.31',
    });
    const res = createResponse();

    await handler(req, res);

    assert.equal(res.statusCode, 400);
    assert.equal(sendMailWasCalled, false);
    assert.deepEqual(JSON.parse(res.payload), {
        ok: false,
        error: 'Bitte stimme der Datenschutzerklaerung zu.',
    });
});

test('accepts honeypot submissions without sending mail', async () => {
    configureZohoEnv();
    let sendMailWasCalled = false;
    nodemailer.createTransport = () => ({
        sendMail: async () => {
            sendMailWasCalled = true;
        },
    });

    const req = createRequest({
        body: {
            email: 'bot@example.com',
            company: 'Bot GmbH',
            role: 'Sonstiges',
            website: 'https://spam.example',
        },
        ip: '127.0.0.4',
    });
    const res = createResponse();

    await handler(req, res);

    assert.equal(res.statusCode, 200);
    assert.deepEqual(JSON.parse(res.payload), { ok: true });
    assert.equal(sendMailWasCalled, false);
});
