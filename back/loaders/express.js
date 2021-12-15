require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const debug = require('debug')('back:server');
const http = require('http');
const https = require('https');
const fs = require('fs');

const routes = require('../routes');

module.exports = async ({ app }) => {
  const normalizePort = function (val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      return val;
    }

    if (port >= 0) {
      return port;
    }

    return false;
  }

  const onError = function (error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  const onListening = function () {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/static', express.static(path.resolve(__dirname, '..', 'public')));
  app.set('views', path.resolve(__dirname, '..', 'templates'));
  app.set('view engine', 'pug');

  app.use(cors({
    origin: true,
    credentials: true,
  }));
  app.use(helmet());

  app.use('/', routes);

  //error handling
  app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).json(err.message);
  });

  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);

  let server;
  if (process.env.NODE_ENV === 'development') {
    server = http.createServer(app);
  } else {
    const sslOptions = {
      key: fs.readFileSync(process.env.SSL_KEY),
      cert: fs.readFileSync(process.env.SSL_CERT),
    };
    server = https.createServer(sslOptions, app);
  }

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  return app;
}
