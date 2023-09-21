"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    shippingInfo: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        pinCode: { type: Number, required: true },
        phoneNo: { type: Number, required: true },
    },
    orderItems: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, default: 1 },
            image: { type: String, required: true },
            product: { type: mongoose_1.default.Schema.ObjectId, ref: "Product", required: true },
        }
    ],
    // itemsPrice: { type: Number, required: true },
    // shippingPrice: { type: Number, required: true },
    // taxPrice: { type: Number, required: true },
    // totalPrice: { type: Number, required: true },
    // isPaid : {type:Boolean, required:false},
    // PaidAt : {type:Date},
    // paymentMethod : {type:String, required:true},
    // paymentResult: {type:Boolean},
    // isDelivered:{type:Boolean, default:false},
    // deliveredAt: {type:Date},
    user: { type: mongoose_1.default.Schema.ObjectId, ref: "User", required: true },
}, {
    timestamps: true,
});
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
