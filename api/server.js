const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const menu_itemsRouter = require('./routes/menu_items');
const sessionsRouter = require('./routes/session');
const cartsRouter = require('./routes/carts');
const ordersRouter = require('./routes/orders');

const app = express();
const knex = require('./knex/knex.js');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/users', usersRouter);
app.use('/api/menu_items', menu_itemsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/orders', ordersRouter);

app.get("/api", (req, res, next) => {
  res.send({ message: "We did it!" });
});

module.exports = app;
