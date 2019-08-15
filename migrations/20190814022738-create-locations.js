'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building_name: {
        type: Sequelize.STRING
      },
      building_address: {
        type: Sequelize.STRING
      },
      building_city: {
        type: Sequelize.STRING
      },
      building_zip: {
        type: Sequelize.STRING
      },
      building_state: {
        type: Sequelize.STRING
      },
      building_country: {
        type: Sequelize.STRING
      },
      number_of_units: {
        type: Sequelize.STRING
      },
      building_image_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};