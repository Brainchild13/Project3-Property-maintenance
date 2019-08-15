'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      user_address: {
        type: Sequelize.STRING
      },
      user_phone: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },
      tenant_location: {
        type: Sequelize.STRING
      },
      tenant_unit_number: {
        type: Sequelize.STRING
      },
      vendor_website_url: {
        type: Sequelize.STRING
      },
      employer_name: {
        type: Sequelize.STRING
      },
      pets: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Users');
  }
};