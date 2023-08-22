const express = require('express');
const router = express.Router();
const { dashboardView } = require("../controllers/dashboardController");
const requireAuth = require('../middlewares/requireAuth');

router.get('/', requireAuth, dashboardView);

module.exports = router;