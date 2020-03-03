const express = require('express');
const Router = express.Router();
const adminController = require('../controllers/adminController');

Router.get('/', adminController.readAllAdmins);
Router.get('/users', adminController.readAllUsers);
Router.get('/accounts', adminController.readAllAccounts);
Router.post('/', adminController.create);
Router.post('/login', adminController.login);

module.exports = Router;