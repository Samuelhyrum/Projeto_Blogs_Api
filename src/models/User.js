// src/models/employee.model.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false, 
      tableName: 'users',
      underscored: true,
    });
  
    // User.associate = (models) => {
    //   User.hasOne(models.Address,
    //     { foreignKey: 'userId', as: 'addresses' });
    // };
  
    return User;
  };