var Sequelize = require('sequelize');
var sequelize;
sequelize = new Sequelize(<Database Name>, <MySql UserName>,<MySql Password>,
{
  host: 'localhost', 
  dialect: 'mysql' // You can change this as per your //database
}, 
{
   sync: true,
   forceSync: false // Keep this false for safer use.
});
//To test mysql connection
sequelize.authenticate().then(function (err) {
  if (err) {
    console.error('Unable to connect to the database:', err);
  } else {
     sequelize.sync();
     console.log('Connection has been established successfully.');
  }
});

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;