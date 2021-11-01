module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    uid: {
			type: DataTypes.STRING(80),
			allowNull: false,
			unique: true,
		},
		pw: {
			type: DataTypes.STRING(512),
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
  }, {})
  user.associate = (models) => {
  }
  return user
}