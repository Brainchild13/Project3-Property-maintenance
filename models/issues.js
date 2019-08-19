'use strict';
module.exports = (sequelize, DataTypes) => {

    const Issues = sequelize.define('Issues', {
        issue_name: DataTypes.STRING,
        issue_description: DataTypes.STRING,
        issue_category: DataTypes.STRING,
        cost: DataTypes.STRING,
        closeup_image: DataTypes.STRING,
        zoom_out_image: DataTypes.STRING,
        completion_image_closeup_image: DataTypes.STRING,
        completion_image_zoom_out: DataTypes.STRING
    }, {});
    Issues.associate = function (models) {
        // associations can be defined here
    };
    return Issues;
};
