const express = require('express');

const routes = express.Router();

const homeController = require('./controllers/HomeController');

routes.get('/:type', homeController.index);
routes.get('/:type/:id', homeController.show);

module.exports = routes;
