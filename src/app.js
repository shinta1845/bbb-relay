// const createError = require('http-errors');
const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// session middleware
// server: express - session || client: cookie - session
const serverSession = require('express-session');
const cookieSession = require('cookie-session');
const viewEngine = require('./config/viewEngine');
const router = require('./config/router.js');
const passport = require('passport');

// import express framework
const app = express();
// const admin = express(); // the sub app

// setting up view engine
viewEngine(app);

// using public static
app.use(express.static(path.join(__dirname, 'public')));

// support URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(upload.array());

// parse cookie from the HTTP request
app.use(cookieParser());
app.use(serverSession({
  secret: "secret",
  // store: myStore,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }, // 1 week
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/jquery", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use("/popper", express.static(path.join(__dirname, "../node_modules/@popperjs/core/dist/umd")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));

require('./database/connect');

// using routes
app.use('/', router);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   // next(createError(404));
//   res.status(404).json({
//     error: 'Sorry can't find that!'
//   });
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   // res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.locals.error = req.app.get('env') === 'local' ? err : {};

//   // render the error page
//   res.status(err.status || 500).json({
//     error: err.message
//   });
// });

module.exports = app;