const express = require('express');
const router = express.Router();
const gpioController = require('../controllers/gpioController')

router.get('/', gpioController.gpioIndex);
router.post('/create', gpioController.gpioCreate);
router.post('/edit', gpioController.gpioEdit);

module.exports = router;