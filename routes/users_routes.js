// Retrieve all users 8-19-19
var db = require("../models");

module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        // console.log(req);
        console.log(db.Users);
        db.Users.findAll({}).then(function(dbUsers){
            res.json(dbUsers);
        });
    });

    app.get("/api/users/:id", function (req, res){
        db.Users.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbUsers){
            res.json(dbUsers);
        });
    });

    app.post("/api/users", function(req, res) {
        console.log(req.body);
        db.Users.create(req.body).then(function(dbUsers){
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
