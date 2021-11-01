module.exports = (sequelize, DataTypes) => {
  const component = sequelize.define('component', {
		tag: {
			type: DataTypes.STRING(15),
			allowNull: false,
		},
		style: {
			type: DataTypes.TEXT,
			allowNull: true,
		}
  }, {})
  component.associate = (models) => {
  }
  return component
}