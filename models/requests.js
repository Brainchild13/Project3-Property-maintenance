'use strict';
module.exports = (sequelize, DataTypes) => {
  const Requests = sequelize.define('Requests', {
    request_number: DataTypes.STRING,
    work_order_number: DataTypes.STRING,
    request_date: DataTypes.STRING,
    date_approved: DataTypes.STRING,
    date_due: DataTypes.STRING,
    status: DataTypes.STRING,
    date_completed: DataTypes.STRING,
    assigned_to: DataTypes.STRING,
    allowed_to_enter: DataTypes.BOOLEAN,
    item1: Datatypes.STRING,
    item1_category: Datatypes.STRING,
    item2: Datatypes.STRING,
    item2_category: Datatypes.STRING,
    item3: Datatypes.STRING,
    item3_category: Datatypes.STRING,
    item4: Datatypes.STRING,
    item4_category: Datatypes.STRING,
    item5: Datatypes.STRING,
    item5: Datatypes.STRING,
    comments_feedback: DataTypes.STRING,
    overall_job_rating_tenant: DataTypes.STRING,
    cleanliness_rating_supervisor: DataTypes.STRING,
    overall_job_rating_supervisor: DataTypes.STRING
  }, {});
  Requests.associate = function(models) {
    // associations can be defined here
  };
  return Requests;
};