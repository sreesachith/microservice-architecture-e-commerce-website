import mongoose from "mongoose";

const payment_schema = mongoose.Schema(
    {
        cardNumber: {
            type:Number,
            required :true,
        },
        expirationDate: {
            type : String,
            required:true,
        },
        cvv: {
            type:Number,
            required : true,
        },
        name:{
            type:String,
            required:true,
        }
    }
);

export const Payment = mongoose.model('payment',payment_schema); 