const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

const register = (req, res, next) => {
  const newUser = new User({email: req.body.email, username: req.body.username, password: req.body.password, token: uuidv4()})
  return newUser.save().then(user => res.send(user));
}

const login = async(req, res, next) => {
  const {email, password} = req.body;

  const user = await User.findOne({email, password});
  if (user) return res.send(200, user);

  return res.sendStatus(401);
}
module.exports = {
  register,
  login,
}