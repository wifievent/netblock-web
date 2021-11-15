module.exports = (sequelize) => {
  const downloadLog = sequelize.define('downloadLog', {
  }, {
    paranoid: false
  });
  downloadLog.associate = (models) => {
    downloadLog.belongsTo(models.Os);
    downloadLog.belongsTo(models.Product);
  };
  return downloadLog;
}