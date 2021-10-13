'use strict'

require('dotenv').config()

const cls = require('cls-hooked')
const namespace = cls.createNamespace('wifievent-namespace')
const Sequelize = require('sequelize')
const env = process.env
const config = require(__dirname + '/../config/')[env.NODE_ENV]
const db = {}

Sequelize.useCLS(namespace);
const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.DownloadLog = require('./downloadLog')(sequelize, Sequelize);
db.Os = require('./os')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db