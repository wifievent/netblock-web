const express = require('express');
const router = express.Router();

const netblock = require('./netblock');
const feedback = require('./feedback');

router
    .use('/netblock', netblock)
    .use('/feedback', feedback);

module.exports = router;