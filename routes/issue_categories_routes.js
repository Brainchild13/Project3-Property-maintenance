// Retrieve all issue categories 8-19-19
var db = require("../models");

module.exports = function(app) {
    app.get("/api/issue_categories", function(req, res) {
        db.Issue_categories.findAll({}).then(function(dbIssue_categories){
            res.json(dbIssue_categories);
        });
    });

    app.get("/api/issue_categories/:id", function (req, res){
        db.Issue_categories.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbIssue_categories){
            res.json(dbIssue_categories);
        });
    });

    app.post("/api/issue_categories", function(req, res) {
        db.Issue_categories.create(req.body).then(function(dbIssue_categories){
            res.json(dbIssue_categories);
        });
    });

    app.delete("/api/issue_categories/:id", function(req, res){
        db.Issue_categories.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbIssue_categories){
            res.json(dbIssue_categories);
        });
    });
};
