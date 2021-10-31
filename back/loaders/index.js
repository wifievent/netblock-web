const expressLoader = require('./express');
const sequelizeLoader = require('./sequelize');

const init = async ({ expressApp }) => {
  await sequelizeLoader();
  await expressLoader({ app: expressApp });
};

module.exports = {
  init
}