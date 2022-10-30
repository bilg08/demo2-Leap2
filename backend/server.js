const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const connectDB = require('./mongoDb');
const app = express();

connectDB();
app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} listening `);
})