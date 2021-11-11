module.exports = (sequelize, DataTypes) => {
  const file = sequelize.define('file', {
    src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fid: {
      type: DataTypes.STRING(128),
      allowNull: false,
    }
  }, {})
  file.associate = (models) => {
    file.belongsTo(models.User);
  }
  return file
}