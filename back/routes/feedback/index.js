const express = require('express');
const router = express.Router();
const controller = require('./feedback.controller');
const { isLoggedIn } = require('../middlewares/middlewares');

router
  .get('/', isLoggedIn, controller.readAll)
  .post('/', isLoggedIn, controller.create)
  .patch('/:id', isLoggedIn, controller.update)
  .delete('/:id', isLoggedIn, controller.remove)
  .get('/:id', isLoggedIn, controller.read);

module.exports = router;