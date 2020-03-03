const express = require(express);
const Router = express.Router();
const feeController = require('../controllers/feeController');


Router.put('/:feeId', feeController)


module.exports = Router;