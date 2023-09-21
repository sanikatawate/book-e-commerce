"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrderModel_1 = __importDefault(require("../models/OrderModel"));
const router = express_1.default.Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        const order = yield OrderModel_1.default.create(req.body);
        return res.status(200).json({ order });
    }
    catch (error) {
        console.log(error.message);
        res.sendStatus(500).send({ message: error.message });
    }
}));
exports.default = router;
