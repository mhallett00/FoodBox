const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()

const usersRouter = require('./routes/users');
const menu_itemsRouter = require('./routes/menu_items');
const sessionsRouter = require('./routes/session');
const cartsRouter = require('./routes/carts');
const ordersRouter = require('./routes/orders');
const app = express();
const knex = require('./knex/knex.js');

// STRIPE PAYMENT
const stripe = require('stripe')(process.env.SECRET_KEY);

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

app.post('/api/payment', async (req, res) => {
  const { id, amount } = req.body
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'CAD',
    description: 'Your order',
    payment_method: id,
    confirm: true
  });
  res
  .status(200)
  .json({
    confirm: "Success!"
  });
});

module.exports = app;
