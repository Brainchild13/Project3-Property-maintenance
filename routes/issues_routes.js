// Retrieve all issue categories 8-19-19
var db = require("../models");

module.exports = function(app) {
    app.get("/api/issues", function(req, res) {
        db.Issues.findAll({
            include: [db.post]
        }).then(function(dbIssues){
            res.json(dbIssues);
        });
    });

    app.get("api/issues/:id", function (res, req){
        db.Issues.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(dbIssues){
            res.json(dbIssues);
        });
    });

    app.post("/api/issues", function(req, res) {
        db.Issues.create(req,body).then(function(dbIssues){
            res.json(dbIssues);
        });
    });

    app.delete("/api/issues/:id", function(req, res){
        db.Issues.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbIssues){
            res.json(dbIssues);
        });
    });
};
