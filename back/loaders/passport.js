require('dotenv').config();
const passport = require('passport');
const passportConfig = require('../passport');
const session = require('express-session');

module.exports = async ({ app }) => {
    passportConfig();
    const sess = {
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
        }
    }
    if (process.env.NODE_ENV !== 'development') {
        app.set('trust proxy', 1);
        sess.cookie.secure = true;
        sess.cookie.sameSite = 'none';
    }
    app.use(session(sess));
    app.use(passport.initialize());
    app.use(passport.session());

    return app;
}