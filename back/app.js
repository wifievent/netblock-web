const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./models')
const helmet = require('helmet');

const netblockRouter = require('./routes/netblock');

const board = require('./routes/board');
const app = express();
sequelize.sync()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

app.use('/netblock', netblockRouter);


app
    .post('/board/create', board.create)
    .patch('/board/:id/update', board.update)
    .delete('/board/:id/delete', board.remove)
    .get('/board/read', board.read);


module.exports = app;
