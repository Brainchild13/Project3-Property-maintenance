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
      item1: DataTypes.STRING,
      item1_category: DataTypes.STRING,
      item2: DataTypes.STRING,
      item2_category: DataTypes.STRING,
      item3: DataTypes.STRING,
      item3_category: DataTypes.STRING,
      item4: DataTypes.STRING,
      item4_category: DataTypes.STRING,
      item5: DataTypes.STRING,
      item5_category: DataTypes.STRING,
      comments_feedback: DataTypes.STRING,
      cleanliness_rating_tenant: DataTypes.STRING,
      overall_job_rating_tenant: DataTypes.STRING,
      cleanliness_rating_supervisor: DataTypes.STRING,
      overall_job_rating_supervisor: DataTypes.STRING,

      //needed to this to issue # to be updated later
      issue_number: DataTypes.STRING,
      //No sure if this is the place the info gets added
      tenant_comment: DataTypes.STRING,
      tenant_work_rating: DataTypes.STRING,
      tenant_cleanliness_rating: DataTypes.STRING,
      manager_comment: DataTypes.STRING,
      manager_work_rating: DataTypes.STRING,
      manager_cleanliness_rating: DataTypes.STRING,
      completion_date: DataTypes.STRING
    },
    {}
  );
  Requests.associate = function(models) {
    // associations can be defined here
  };
  return Requests;
};
