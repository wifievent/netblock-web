module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    }
  }, {
    timestamps: false,
  });
  product.associate = (models) => {
    product.hasMany(models.DownloadLog)
  };
  return product;
}