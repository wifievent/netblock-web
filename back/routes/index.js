const express = require('express');
const router = express.Router();

const netblock = require('./netblock');
const feedback = require('./feedback');
const downloadLog = require('./downloadLog');
const user = require('./user');

router
    .use('/netblock', netblock)
    .use('/feedback', feedback)
    .use('/downloadLog', downloadLog)
    .user('/user', user);

module.exports = router;