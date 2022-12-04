import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index.js';

const app = express();
import fs from 'fs';
import { stringify } from 'querystring';
app.use(express.json());
app.use(express.static('public'));
import cors from 'cors';

dotenv.config();
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
