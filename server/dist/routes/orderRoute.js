"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authUser_1 = require("../middleware/auth/authUser");
const orderController_1 = require("../controllers/orderController");
const router = express_1.default.Router();
router.route("/").post(authUser_1.authUser, orderController_1.newOrder);
router.route("/history").get(authUser_1.authUser, orderController_1.orderHistory);
exports.default = router;
// router.post('/',async (req, res) => {
//     try {
// const newOrder = {
//     shippingInfo : {
//         fullName: req.body.fullname,
//         address : req.body.address
//         pinCode : req.body.pinCode,
//         phoneNo : req.body,
//     },
//     orderItems : [
//         {
//             name: {type:String, required:true},
//             price: {type:Number, required:true},
//             quantity : {type:Number, default:1},
//             image: {type:String, required:true},
//             product : {type: mongoose.Schema.ObjectId, ref:"Product", required:true},
//         }
//     ],           
//     user : {type: mongoose.Schema.ObjectId, ref:"User", required:true},
// }
//         const order = await Order.create(req.body)
//         return res.status(200).json({order})
//     } catch (error:any) {
//         console.log(error.message)
//         res.sendStatus(500).send({message:error.message})
//     }
// })
