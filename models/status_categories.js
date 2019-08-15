'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status_categories = sequelize.define('Status_categories', {
    status_name: DataTypes.STRING,
    status_description: DataTypes.STRING,
    status_description: DataTypes.STRING
  }, {});
  Status_categories.associate = function(models) {
    // associations can be defined here
  };
  return Status_categories;
};