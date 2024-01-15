const mongoose=require("mongoose");
const Customer_Schema=mongoose.Schema(
    {
        cname:{
            type:String,
            required:true
        },
        cnum:{
            type:Number,
            required:true,
            unique:true
        },
        ccity:{
            type:String,
            required:true
        },
        cstate:{
            type:String,
            required:true
        },
        cpin:{
            type:Number,
            required:true
        }
    }
)
module.exports=mongoose.model("customer",Customer_Schema);