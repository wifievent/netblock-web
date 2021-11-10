require('dotenv').config();

const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PW,
        number: ""
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = {
    smtpTransport
}