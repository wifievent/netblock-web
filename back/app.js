const loaders = require('./loaders');
const express = require('express');
const guideLoader = require('./loaders/guide');

var startServer = async function () {
    const app = express();
    await loaders.init({ expressApp: app });
    
    const guideApp = express();
    await guideLoader({ app: guideApp });
}

startServer();