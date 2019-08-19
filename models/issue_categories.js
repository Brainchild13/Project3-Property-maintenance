'use strict';
module.exports = (sequelize, DataTypes) => {
    const Issue_categories = sequelize.define('Issue_categories', {
        issue_category_name: DataTypes.STRING,
        issue_category_description: DataTypes.STRING
    }, {});
    Issue_categories.associate = function (models) {
        // associations can be defined here
    };
    return Issue_categories;
};