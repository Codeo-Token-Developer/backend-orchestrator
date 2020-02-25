const express = require('express');
const Router = express.Router();


Router.get('/', function (req,res,next) {
    res.send('this is admin')
})

module.exports = Router;