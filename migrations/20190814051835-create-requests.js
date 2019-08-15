'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      request_number: {
        type: Sequelize.STRING
      },
      work_order_number: {
        type: Sequelize.STRING
      },
      request_date: {
        type: Sequelize.STRING
      },
      date_approved: {
        type: Sequelize.STRING
      },
      date_due: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      date_completed: {
        type: Sequelize.STRING
      },
      assigned_to: {
        type: Sequelize.STRING
      },
      allowed_to_enter: {
        type: Sequelize.BOOLEAN
      },
      comments_feedback: {
        type: Sequelize.STRING
      },
      cleanliness_rating_tenant: {
        type: Sequelize.STRING
      },
      overall_job_rating_tenant: {
        type: Sequelize.STRING
      },
      cleanliness_rating_supercisor: {
        type: Sequelize.STRING
      },
      overall_job_rating_supervisor: {
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
    return queryInterface.dropTable('Requests');
  }
};