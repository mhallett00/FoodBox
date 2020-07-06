var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const knex = require('./knex/knex.js');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/tasks', (req, res) => {
  // use the knex variable above to create dynamic queries
});

app.get("/api", (req, res, next) => {
  res.send({ message: "We did it!" });
});

module.exports = app;
