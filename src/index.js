//const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const app = express();
const port = 3000;
const fs = require('fs');
const { stringify } = require('querystring');
app.use(express.json());
app.use(express.static('public'));
const cors = require('cors');

app.use(cors());

//const products = require('../src/models/products.json')
const employees = require('../data/empleados.json');
const empre = require('../data/empresas.json');

app.use(router);
//mongoose.connect(process.env.DATABASE_URL)
mongoose
  .connect(
    'mongodb+srv://ejecutorHarlan:Conte+29@cluster0.m2gon.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('🟢 DB Connected');
    //app.listen({ port: process.env.PORT }, () => {
    app.listen({ port: 3000 }, () => {
      console.log(`🚗 Server running on port `, port);
    });
  })
  .catch((err) => {
    console.log('🔴 There was an error on the DB connection method.');
    console.log(err);
  });
