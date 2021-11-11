const express = require('express');
const router = express.Router();

const nb = require('./nb');
const feedback = require('./feedback');
const user = require('./user');
const cp = require('./cp');

const downloadLog = require('./admin/downloadLog');
const adminUser = require('./admin/user');
const adminFeedback = require('./admin/feedBack');

router.use('/netblock', nb)
router.use('/feedback', feedback)
router.use('/user', user)
router.use('/cp', cp)

router.use('/admin/downloadLog', downloadLog)
router.use('/admin/user', adminUser)
router.use('/admin/feedback', adminFeedback)

module.exports = router;