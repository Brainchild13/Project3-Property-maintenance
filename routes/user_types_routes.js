// Retrieve all issue categories 8-19-19
var db = require("../models");

module.exports = function(app) {
    app.get("/api/user_types", function(req, res) {
        db.User_types.findAll({
        }).then(function(dbUser_types){
            res.json(dbUser_types);
        });
    });

    app.get("/api/user_types/:id", function (res, req){
        db.User_types.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbUser_types){
            res.json(dbUser_types);
        });
    });

    app.post("/api/user_types", function(req, res) {
        db.User_types.create(req,body).then(function(dbUser_types){
            res.json(dbUser_types);
        });
    });

    app.delete("/api/user_types/:id", function(req, res){
        db.User_types.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser_types){
            res.json(dbUser_types);
        });
    });
};
