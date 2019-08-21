// Retrieve all users 8-19-19
var db = require("../models");

module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        db.Users.findAll({
            include: [db.post]
        }).then(function(dbUsers){
            res.json(dbUsers);
        });
    });

    app.get("api/users/:id", function (res, req){
        db.Users.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(dbUsers){
            res.json(dbUsers);
        });
    });

    app.post("/api/users", function(req, res) {
        db.Users.create(req,body).then(function(dbUsers){
            res.json(dbUsers);
        });
    });

    app.delete("/api/authors/:id", function(req, res){
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUsers){
            res.json(dbUsers);
        });
    });
};
