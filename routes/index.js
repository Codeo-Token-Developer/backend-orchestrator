const express = require('express');
const Router = express.Router();

//Router use
const userRouter = require('./userRouter');
const adminRouter = require('./adminRouter');

Router.use('/users', userRouter);
Router.use('/admins', adminRouter);

module.exports = Router;