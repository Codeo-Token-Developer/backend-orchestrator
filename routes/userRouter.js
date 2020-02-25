const express = require('express');
const Router = express.Router();
const { userController } = require('../controllers');

Router.get('/', userController.readAll);
Router.get('/account', userController.readMe);
Router.post('/', userController.create);
Router.post('/login', userController.login);

module.exports = Router;