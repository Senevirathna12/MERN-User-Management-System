const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT|| 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL).then(()=>{
    console.log("MongoDB connection successfull!");
})
.catch((err)=>{
    console.error("MongoDB connection error:", err);
})
    
const userRouter = require("./routes/Users");
app.use("/user",userRouter);


app.listen(PORT,()=>{
    console.log(`Server is up and running on port number ${PORT}`);
})
