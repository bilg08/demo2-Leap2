const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const connectDB = require('./mongoDb');
const cors = require('cors');
const app = express();
const userRouter = require('./router/user.js')
const advertisingRouter = require("./router/ad.js");

app.use(express.json());

//advertising router
app.use("/advertisings", advertisingRouter);

//users router
app.use('/users',userRouter)


connectDB();
app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} listening `);
})