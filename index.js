const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const mongoose = require('mongoose');

var rooms = require('./routes/rooms');
var users = require('./routes/users');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World'));
app.use('/rooms', rooms);
app.use('/users', users);

app.listen(port, () => console.log('Example app listening at http://locahost:3000'));