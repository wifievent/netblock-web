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
    .post('/board', board.create)
    .patch('/board/:id', board.update)
    .delete('/board/:id', board.remove)
    .get('/board', board.read);

//error handling
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
