require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// log to console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'catch all',
}));

module.exports = app;