const Room = require("../models/Room");
const User = require("../models/User");

const create = async (req, res) => {
  const user = await User.findOne({token: req.body.userToken});

  if (!user) {
    return res.sendStatus(400);
  }

  const newRoom = new Room({
    createdBy: user.id,
    users: [user.id],
    name: req.body.name,
  });

  console.log({newRoom});

  newRoom.save().then((room) => {
    res.send(200, room);
  })
};

const get = async (req, res) => {
  const rooms = await Room.find();
  return res.send(200, rooms);
};

const join = async (req, res) => {
  const user = await User.findOne({token: req.body.userToken});

  if (!user) {
    return res.sendStatus(400);
  }

  const room = await Room.findById(req.body.roomId);

  if (room.users.find((userId) => userId.toString() === user._id.toString())) return res.send(200, room);

  room.users = [...room.users, user.id];

  return room.save().then((room) => {
    res.send(200, room);
  })
}; 

module.exports = {
  create,
  get,
  join,
}