import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    shippingInfo : {
        fullName: {type:String, required:true},
        address : {type:String, required:true},
        pinCode : {type:Number, required:true},
        phoneNo : {type:Number, required:true},
    },
    orderItems : [
        {
            name: {type:String, required:true},
            price: {type:Number, required:true},
            quantity : {type:Number, default:1},
            image: {type:String, required:true},
            product : {type: mongoose.Schema.ObjectId, ref:"Product", required:true},
        }
    ],

    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },

    isPaid : {type:Boolean, required:false},
    PaidAt : {type:Date},
    paymentMethod : {type:String, required:true, default:"Gpay"},
    paymentResult: {type:Boolean},

    isDelivered:{type:Boolean, default:false},
    deliveredAt: {type:Date},
    
    user : {type: mongoose.Schema.ObjectId, ref:"User", required:true}, 
},
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;