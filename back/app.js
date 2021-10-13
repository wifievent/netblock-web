const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./models')
const helmet = require('helmet');

const netblockRouter = require('./routes/netblock');

const app = express();
sequelize.sync()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

app.use('/netblock', netblockRouter);

module.exports = app;
