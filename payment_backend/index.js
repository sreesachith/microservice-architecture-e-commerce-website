import express, { request, response } from "express";
import {PORT,MONGO} from "./config.js";
import Mongoose  from "mongoose";
import { Payment } from "./datamodel.js";
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors());

app.post('/payment',async(request,response) => {
    try{
      if(
        !request.body.cardNumber||
        !request.body.expirationDate||
        !request.body.cvv||
        !request.body.name
      )  {
        return response.status(400).send({
            message:'please fill all required fields'
        });
      }
      const newPay = {
        cardNumber:request.body.cardNumber,
        expirationDate:request.body.expirationDate,
        cvv:request.body.cvv,
        name:request.body.name
      };

      const pay = await Payment.create(newPay);
      return response.status(201).send(pay);

    }catch(error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})
/*
const cartItemSchema = new mongoose.Schema({
    productId: String,
    quantity: Number,
    price:Number
    // Other fields as needed
  });
  
  // Define a model based on the schema
  const CartItem = mongoose.model('CartItem', cartItemSchema);

app.get('/payment',async (request,response) => {
    try{
        const product = await Book.find({});
        return response.status(200).json(books);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
}


);
*/
Mongoose
.connect(MONGO)
.then(() => {
    console.log("connected to mongodb");
    app.listen(PORT,()=>{
        console.log(`app is listening to port: ${PORT}`);
    });
    
}).catch((err) => {
    console.log(err);
});