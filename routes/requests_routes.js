// Retrieve all issue categories 8-19-19
var db = require('../models');
// var cors = require('cors');

module.exports = function(app) {
  app.get('/api/requests', function(req, res) {
    db.Requests.findAll({}).then(function(dbRequests) {
      res.json(dbRequests);
    });
  });

  app.get('/api/requests/:id', function(req, res) {
    db.Requests.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbRequests) {
      res.json(dbRequests);
    });
  });

  // app.get('/api/requests/:completion_date', function(req, res) {
  //   db.Requests.findOne({
  //     where: {
  //       completion_date: req.params.completion_date isNull
  //     }
  //   }).then(function(dbRequests) {
  //     res.json(dbRequests);
  //   });
  // });

  app.post('/api/requests', function(req, res) {
    db.Requests.create(req.body).then(function(dbRequests) {
      res.json(dbRequests);
    });
  });

  app.delete('/api/requests/:id', function(req, res) {
    db.Requests.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRequests) {
      res.json(dbRequests);
    });
  });
};
