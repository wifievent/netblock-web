const logger = require('../../config/winston');
exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        logger.info('verify Login');
        next();
    } else {
        logger.error('로그인 필요');
        res.status(403).json({ status: false, result: '로그인 필요' });
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        logger.info('verify Loginout');
        next();
    } else {
        logger.error('로그인한 상태입니다.');
        const message = encodeURIComponent('로그인한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
};
