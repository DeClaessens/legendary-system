var express = require('express');
const routeValidator = require('../middleware/routeValidator');
const UserController = require('../controllers/UserController');
const Joi = require('joi');
var router = express.Router();

const registerSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});
router.post('/register', routeValidator(registerSchema), UserController.register);

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
router.post('/login', routeValidator(loginSchema), UserController.login);

module.exports = router;