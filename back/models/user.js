module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define('user', {
		uid: {
			type: DataTypes.STRING(80),
			allowNull: false,
			unique: true,
		},
		pw: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		salt: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		is_admin: {
			type: DataTypes.BOOLEAN,
			defaultValue: 0,
		}
	}, {})
	user.associate = (models) => {
		user.hasMany(models.Feedback, { foreignKey: 'commenter', sourceKey: 'id' });
		user.hasMany(models.File);
		user.hasOne(models.Component);
	};
	return user
}