const express = require('express');
const UsersController = require('./controllers/UsersController');
const SponsorsController = require('./controllers/SponsorsController');
const ModelsController = require('./controllers/ModelsController');
const ColorsController = require('./controllers/ColorsController');
const NumbersController = require('./controllers/NumbersController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);
routes.post('/users/delete', UsersController.delete);

routes.post('/session', SessionController.create);

routes.post('/sponsors', SponsorsController.create);
routes.get('/sponsors', SponsorsController.index);
routes.post('/sponsors/delete', SponsorsController.delete);

routes.post('/models', ModelsController.create);
routes.get('/models', ModelsController.index);
routes.post('/models/delete', ModelsController.delete);

routes.post('/colors', ColorsController.create);
routes.get('/colors', ColorsController.index);
routes.post('/colors/delete', ColorsController.delete);

routes.post('/numbers', NumbersController.create);
routes.get('/numbers', NumbersController.index);
routes.get('/numbers/quant', NumbersController.indexQuant);
routes.post('/numbers/:quant/:id/update', NumbersController.changeQuant);
routes.post('/numbers/:id/increment', NumbersController.increment);
routes.post('/numbers/:id/decrement', NumbersController.decrement);
routes.post('/numbers/delete', NumbersController.delete);

module.exports = routes;