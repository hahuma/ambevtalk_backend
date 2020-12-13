const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: process.env.APP_URL || undefined,
};

mongoose.connect(
  'mongodb+srv://ambev:ambev@cluster0.ebckb.mongodb.net/AmbevTalkdb?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

app.use(cors(corsOptions));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '..', '..', 'uploads')));
app.use(routes);

module.exports = app;
