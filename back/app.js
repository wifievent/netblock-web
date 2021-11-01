const loaders = require('./loaders');
const express = require('express');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');

async function startServer() {
    const app = express();
    passportConfig();
    app.use(session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await loaders.init({ expressApp: app });
}

startServer();