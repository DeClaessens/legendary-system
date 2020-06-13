var express = require('express');
const RoomsController = require('../controllers/RoomsController');
var router = express.Router()

router.get('/', RoomsController.get)
router.post('/create', RoomsController.create);
router.post('/join', RoomsController.join);

module.exports = router;