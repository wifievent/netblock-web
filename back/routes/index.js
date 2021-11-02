const express = require('express');
const router = express.Router();

const netblock = require('./netblock');
const feedback = require('./feedback');
const downloadLog = require('./admin/downloadLog');
const user = require('./user');
const adminUser = require('./admin/user');

router.use('/netblock', netblock)
router.use('/feedback', feedback)
router.use('/user', user)

router.use('/admin/downloadLog', downloadLog)
router.use('/admin/user', adminUser)

module.exports = router;