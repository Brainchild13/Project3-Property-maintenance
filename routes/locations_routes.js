// Retrieve all issue categories 8-19-19
var db = require("../models");

module.exports = function(app) {
    app.get("/api/locations", function(req, res) {
        db.Locations.findAll({}).then(function(dbLocations){
            res.json(dbLocations);
        });
    });

    app.get("/api/locations/:id", function (req, res){
        console.log(req.params)
        db.Locations.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbLocations){
            res.json(dbLocations);
        });
    });

    app.post("/api/locations", function(req, res) {
        db.Locations.create(req.body).then(function(dbLocations){
            res.json(dbLocations);
        });
    });

    app.delete("/api/locations/:id", function(req, res){
        db.Locations.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbLocations){
            res.json(dbLocations);
        });
    });
};
