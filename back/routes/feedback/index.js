const express = require('express');
const router = express.Router();
const controller = require('./feedback.controller');

router
  .post('/', controller.create)
  .patch('/:id', controller.update)
  .delete('/:id', controller.remove)
  .get('/', controller.read);

module.exports = router;