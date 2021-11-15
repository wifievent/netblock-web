const loaders = require('./loaders');
const express = require('express');

var startServer = async function () {
    const app = express();
    await loaders.init({ expressApp: app });
}

startServer();