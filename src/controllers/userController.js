const express = require('express');
const router = express.Router();
const user = require('../models/user.js');

const userIndex = (req, res, next) => {
    res.render('index', { title: 'User' });
};

const userEdit = (req, res, next) => {
    res.render('edit', { title: 'User' });
};

module.exports = {
    userIndex,
    userEdit
};