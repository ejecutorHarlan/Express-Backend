const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const app = express();
const fs = require('fs');
const { stringify } = require('querystring');
app.use(express.json());
app.use(express.static('public'));
const cors = require('cors');

app.use(cors());

app.use(router);
mongoose
  .connect(process.env.DATABASE_URL)

  .then(() => {
    console.log('🟢 DB Connected 🟢');
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗💨 Server running on port`, process.env.PORT);
    });
  })
  .catch((err) => {
    console.log('🔴 There was an error on the DB connection 🔴');
    console.log(err);
  });
