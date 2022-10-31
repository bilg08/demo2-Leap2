const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const connectDB = require('./mongoDb');
const cors = require('cors');
const app = express();
const userRouter = require('./router/user.js')


app.use(express.json());


//advertising router
app.use('/users',userRouter)


connectDB();
app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} listening `);
})