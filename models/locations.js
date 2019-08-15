'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    building_name: DataTypes.STRING,
    building_address: DataTypes.STRING,
    building_city: DataTypes.STRING,
    building_zip: DataTypes.STRING,
    building_state: DataTypes.STRING,
    building_country: DataTypes.STRING,
    number_of_units: DataTypes.STRING,
    building_image_url: DataTypes.STRING
  }, {});
  Locations.associate = function(models) {
    // associations can be defined here
  };
  return Locations;
};