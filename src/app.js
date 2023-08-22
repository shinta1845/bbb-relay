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
const views = require('./config/viewEngine');
const sequelize = require('./config/connectDB');
const router = require('./router.js');
const passport = require('passport');

sequelize.sync({
  force: true // drop table if exists
}).then(() => {
  console.log("Database & tables created!");
});



const app = express();
// const admin = express(); // the sub app

views(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // support URL-encoded bodies
// app.use(upload.array());
app.use(cookieParser()); // parse cookie from the HTTP request
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
app.use("/popper", express.static(path.join(__dirname, "../node_modules/popper.js/dist")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));

// Routing
app.use('/', router);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
//   // res.status(404).send("Sorry can't find that!")
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   // res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.locals.error = req.app.get('env') === 'local' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;