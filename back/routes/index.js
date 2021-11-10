const express = require('express');
const router = express.Router();

const netblock = require('./netblock');
const feedback = require('./feedback');
const user = require('./user');
const cp = require('./captive_portal');

const downloadLog = require('./admin/downloadLog');
const adminUser = require('./admin/user');
const adminFeedback = require('./admin/feedBack');

router.use('/netblock', netblock)
router.use('/feedback', feedback)
router.use('/user', user)
router.use('/cp', cp)

router.use('/admin/downloadLog', downloadLog)
router.use('/admin/user', adminUser)
router.use('/admin/feedback', adminFeedback)

module.exports = router;