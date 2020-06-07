var express = require('express')
var router = express.Router()
const UserController = require('../controllers/UserController');

router.post('/create', UserController.create);

module.exports = router;