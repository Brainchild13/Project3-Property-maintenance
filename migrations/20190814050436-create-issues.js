'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Issues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      issue_name: {
        type: Sequelize.STRING
      },
      issue_description: {
        type: Sequelize.STRING
      },
      issue_category: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.STRING
      },
      closeup_image: {
        type: Sequelize.STRING
      },
      zoom_out_image: {
        type: Sequelize.STRING
      },
      completion_image_closeup_image: {
        type: Sequelize.STRING
      },
      completion_image_zoom_out: {
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
    return queryInterface.dropTable('Issues');
  }
};