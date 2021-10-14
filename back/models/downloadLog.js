module.exports = (sequelize, DataTypes) => {
  const downloadLog = sequelize.define('downloadLog', {
    version: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    paranoid: false,
  });
  downloadLog.associate = (models) => {
    downloadLog.belongsTo(models.Os);
    downloadLog.belongsTo(models.Product);
  };
  return downloadLog;
}