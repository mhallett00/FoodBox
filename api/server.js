const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const menu_itemsRouter = require('./routes/menu_items');
const allergensRouter = require('./routes/allergens');
const loginRouter = require('./routes/session');
const registerRouter = require('./routes/register');

const app = express();
const knex = require('./knex/knex.js');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/users', usersRouter);
app.use('/api/menu_items', menu_itemsRouter);
app.use('/api/allergens', allergensRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);

app.get("/api", (req, res, next) => {
  res.send({ message: "We did it!" });
});

module.exports = app;
