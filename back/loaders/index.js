const expressLoader = require('./express');
const sequelizeLoader = require('./sequelize');
const swaggerLoader = require('./swagger');

const init = async ({ expressApp }) => {
  await sequelizeLoader();
  await expressLoader({ app: expressApp });
  await swaggerLoader({ app: expressApp });
};

module.exports = {
  init
}