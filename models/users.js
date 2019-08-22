'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_address: DataTypes.STRING,
    user_phone: DataTypes.STRING,
    user_email: DataTypes.STRING,
    password: DataTypes.STRING,
    tenant_location: DataTypes.STRING,
    tenant_unit_number: DataTypes.STRING,
    employer_name: DataTypes.STRING,
    pets: DataTypes.BOOLEAN
  });
  return Users;
};