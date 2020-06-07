var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send(['Room 1', 'Room 2', 'Room 3']);
})

router.post('/create', (req, res) => {
  //controller
  res.send(['Room 3']);
})

module.exports = router;