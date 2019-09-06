//Dependencies
//=====================================
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const db = require('./models');
const path = require('path');

// Added connection information 8-26-19
// const connection = mysql.createConnection(process.env.JAWSDB_URL);s

// connection.connect();
// connection.query('SELECT * USERS', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('lIST OF USERS: ', rows[0].solution);
// });

// Variable Port
//======================================
const PORT = process.env.PORT || 8080;
// Adding in configureation details 8-26-19
require('dotenv').config();

//Middleware
//======================================
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// body parser 8-21-19
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Routing 8-19-19
const router = express.Router();

//Test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'horray! welcome to our api' });
});

//More routes will happen here - 8-19-19

//Register our Routes 8-19-19
//all of our routes will be prefixed with /api
app.use('/api', router);

//default route 8-19-19
app.get('/', function(req, res) {
  return res.send({ error: true, message: 'hello' });
});
//======================================
require('./routes/issue_categories_routes.js')(app);
require('./routes/issues_routes.js')(app);
require('./routes/locations_routes.js')(app);
require('./routes/requests_routes.js')(app);
require('./routes/status_categories_routes.js')(app);
require('./routes/user_types_routes.js')(app);
require('./routes/users_routes.js')(app);

//Lisening to the PORT
//======================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
  });
});

// export the app 8-19-19
module.exports = app;
