'use strict';
module.exports = (sequelize, DataTypes) => {
  const Requests = sequelize.define(
    'Requests',
    {
      request_number: DataTypes.STRING,
      work_order_number: DataTypes.STRING,
      request_date: DataTypes.STRING,
      date_approved: DataTypes.STRING,
      date_due: DataTypes.STRING,
      status: DataTypes.STRING,
      date_completed: DataTypes.STRING,
      assigned_to: DataTypes.STRING,
      allowed_to_enter: DataTypes.BOOLEAN,
      item1: STRING,
      item1_category: STRING,
      item2: STRING,
      item2_category: STRING,
      item3: STRING,
      item3_category: STRING,
      item4: STRING,
      item4_category: STRING,
      item5: STRING,
      item5_category: STRING,
      comments_feedback: DataTypes.STRING,
      overall_job_rating_tenant: DataTypes.STRING,
      cleanliness_rating_supervisor: DataTypes.STRING,
      overall_job_rating_supervisor: DataTypes.STRING
    },
    {}
  );
  Requests.associate = function(models) {
    // associations can be defined here
  };
  return Requests;
};
