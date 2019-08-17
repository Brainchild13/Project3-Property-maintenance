//Dependencies
//=====================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require("./models");

// Variable Port
//======================================
const PORT = process.env.PORT || 8080;

//Middleware
//======================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routing
//======================================
// console.log('routes');

//Lisening to the PORT
//======================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
  });
});