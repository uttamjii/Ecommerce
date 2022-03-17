const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// var cors = require('cors')
const errorMiddleware = require('./middleware/error');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");
const path = require("path");


//Config
// dotenv.config({ path: "backend/config/config.env" });
//Config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({ path: "backend/config/config.env" });
}


// app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


//Route Imports
const product = require('./routes/productRoutes');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoutes');
const payment = require('./routes/paymentRoutes');

app.use("/api/v1", product);
app.use("/api/v1", user)
app.use('/api/v1', order)
app.use('/api/v1', payment)


app.use(express.static(path.join(__dirname,"../fronted/build")))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(path.join(__dirname,"../fronted/build/index.html")))
})


// Middleware for Error Handling
app.use(errorMiddleware)


module.exports = app;