var express = require('express');
const RoomsController = require('../controllers/RoomsController');
const routeValidator = require('../middleware/routeValidator');
const Joi = require('joi');
var router = express.Router()

router.get('/', RoomsController.get)

const createSchema = Joi.object().keys({
  userToken: Joi.string().required(),
  name: Joi.string().required(),
});

router.post('/create', routeValidator(createSchema), RoomsController.create);

const joinSchema = Joi.object().keys({
  roomId: Joi.string().required(),
  userToken: Joi.string().required(),
});

router.post('/join', routeValidator(joinSchema), RoomsController.join);

module.exports = router;