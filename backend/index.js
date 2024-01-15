require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const customerRoute=require("./routes")
app.use(express.json());
app.use(cors());
app.use('/customer',customerRoute);
mongoose.connect(process.env.MONGO)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('App connected to DB');
    })
})
