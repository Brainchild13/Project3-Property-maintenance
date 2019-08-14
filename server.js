// Dependencies
// ============
const express        = require('express');
const path           = require('path');
const logger         = require('morgan');
// const session        = require('express-session'); 
// const passport 			 = require("./config/passport");
// const config				 = require("./config/extra-config");
// Express settings
// ================

// instantiate our app
const app = express();

//allow sessions
// app.use(session({ secret: 'booty Mctootie', cookie: { maxAge: 60000 }}));



// const isAuth 				 = require("./config/middleware/isAuthenticated");
// const authCheck 		 = require('./config/middleware/attachAuthenticationStatus');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(authCheck);


// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});

db = require('./models');

// we set the port of the app
app.set('port', process.env.PORT || 3000);

// we sync the models with our db
// (thus creating the apropos tables)
// db.sequelize.sync().then(function() {
  // set our app to listen to the port we set above
  var server = app.listen(app.get('port'), function() {
    // then save a log of the listening to our debugger.
    console.log('Express server listening on port ' + server.address().port);
  });
// });
