const express = require('express');
const router = express.Router();
const controller = require('./nb.controller');

router.get('/', controller.download);

module.exports = router;