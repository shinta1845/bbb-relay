var express = require('express');
var router = express.Router();

const adminRoute = require('../routes/adminRoute');
const dashboardRoute = require('../routes/dashboardRoute');
const loginRoute = require('../routes/loginRoute');
const registerRoute = require('../routes/registerRoute');
const userRoute = require('../routes/userRoute');
const gpioRoute = require('../routes/gpioRoute');

router.use('/admin', adminRoute);
router.use('/dashboard', dashboardRoute);
router.use('/login', loginRoute);
router.use('/register', registerRoute);
router.use('/user', userRoute);
router.use('/gpio', gpioRoute);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'BBB', header: 'dashboard Page' });
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', { title: 'BBB', header: 'dashboard Page' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'BBB', header: 'About Us' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'BBB', header: 'Contact Us' });
});

// router.get('/index?page=:page', function (req, res, next) {
//   const page = req.query.page;
//   if (page === 'register') {
//     router.use('/register', require('./register'));
//   }
// });

module.exports = router;