module.exports = (sequelize, DataTypes) => {
  const file = sequelize.define('file', {
    src: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sid: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(135),
      allowNull: false
    }
  }, {})
  file.associate = (models) => {
    file.belongsTo(models.User);
    file.belongsTo(models.Page);
  }
  return file
}