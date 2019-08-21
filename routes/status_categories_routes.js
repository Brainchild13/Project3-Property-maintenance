// Retrieve all issue categories 8-19-19
var db = require("../models");

module.exports = function(app) {
    app.get("/api/status_categories", function(req, res) {
        db.Status_categories.findAll({
            include: [db.post]
        }).then(function(dbStatus_categories){
            res.json(dbStatus_categories);
        });
    });

    app.get("api/status_categories/:id", function (res, req){
        db.Status_categories.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(dbStatus_categories){
            res.json(dbStatus_categories);
        });
    });

    app.post("/api/status_categories", function(req, res) {
        db.Requests.create(req,body).then(function(dbStatus_categories){
            res.json(dbStatus_categories);
        });
    });

    app.delete("/api/status_categories/:id", function(req, res){
        db.Status_categories.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbStatus_categories){
            res.json(dbStatus_categories);
        });
    });
};
