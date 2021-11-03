const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const { User } = require('../models');
module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'uid',
        passwordField: 'pw',
    }, async (uid, pw, done) => {
        const exUser = await User.findOne({ where: { uid, pw: crypto.createHash('sha512').update(pw).digest('base64') } }).catch((err) => console.error(err));
        if (exUser) {
            return done(null, exUser);
        } else {
            done(null, false, { message: '아이디 또는 비밀번호를 확인하세요.' });
        }
    }));
};