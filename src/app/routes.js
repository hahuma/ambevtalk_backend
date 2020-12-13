const { Router } = require('express');

const createUsersController = require('./controllers/CreateUsersController');
const createIdeasController = require('./controllers/CreateIdeasController');
const createCommentsController = require('./controllers/CreateCommentsController');
const findUserController = require('./controllers/FindUserController');
const listIdeasController = require('./controllers/ListIdeasController');

const checkJWT = require('./config/auth/checkJWT');

const routes = Router();

routes.get('/ideas', checkJWT, listIdeasController.index);
routes.get('/user/:id', findUserController.index);
routes.post('/user', createUsersController.create);
routes.post('/new_idea', checkJWT, createIdeasController.create);
routes.post('/ideas/:id', createCommentsController.create);

module.exports = routes;
