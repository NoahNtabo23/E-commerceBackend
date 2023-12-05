const express=require('express');
const dbConnect = require('../config/dbConnect');
const app=express();
const dotenv=require('dotenv').config();
const PORT=process.env.PORT || 4000;
const authRouter=require('./authRoute');
const productRouter=require('./productRoute');
const categoryRouter=require('./categoryRoute');
const brandRouter=require('./brandRoute');
const couponRouter=require('./couponRoute');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errorHandler,notFound } = require('../middlewares/errorHandler');
const morgan=require('morgan');
dbConnect()
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))
app.use(cookieParser())
app.use("/api/user",authRouter);
app.use("/api/product",productRouter);
app.use("/api/category",categoryRouter);
app.use("/api/brand",brandRouter);
app.use("/api/coupon",couponRouter);

app.use(notFound);
app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})