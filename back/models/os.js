module.exports = (sequelize, DataTypes) => {
  const os = sequelize.define('os', {
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    }
  }, {
    timestamps: false,
  });
  os.associate = (models) => {
    os.hasMany(models.DownloadLog)
  };
  return os;
}