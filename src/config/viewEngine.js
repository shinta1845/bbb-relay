const express = require('express');
const hbs = require('hbs');
const path = require('path');

const configViewEngine = (app) => {
    hbs.registerPartials(path.join(__dirname, '../resources/views/partials'), function (err) { });
    app.set('views', path.join(__dirname, '../resources/views'));
    app.set('view engine', 'hbs');
    app.set('view options', { layout: './layout/main' });
};

module.exports = configViewEngine;