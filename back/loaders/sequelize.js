const { sequelize } = require('../models');

module.exports = async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('db connection established');
    })
    .catch(err => {
      console.error('db connection error:', err);
    });
  
  sequelize.sync()
    .then(() => {
      console.log('db sync success')
    })
    .catch(err => {
      console.error('db sync error:', err);
    })
}