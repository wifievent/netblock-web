const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.download(__dirame + '../asdf.txt');
});

module.exports = router;
