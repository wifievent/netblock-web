require('dotenv').config();

const nodeMailer = require('nodemailer');

const smtpTransport = nodeMailer.createTransport({
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
