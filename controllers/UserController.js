const User = require('../models/User');

const create = (req, res, next) => {
  console.log(req.body);
  const newUser = new User({token: req.body.token, name: req.body.name})
  return newUser.save().then(user => res.send(user));
}
module.exports = {
  create,
}