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
exports.orderHistory = exports.newOrder = void 0;
const OrderModel_1 = __importDefault(require("../models/OrderModel"));
const newOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { shippingInfo, orderItems, itemsPrice, shippingPrice, taxPrice, totalPrice, } = req.body;
        const order = yield OrderModel_1.default.create({
            shippingInfo,
            orderItems,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
            PaidAt: Date.now(),
            user: req.user.id
        });
        return res.status(200).json({ order });
    }
    catch (error) {
        console.log(error.message);
        res.sendStatus(500).send({ message: error.message });
    }
});
exports.newOrder = newOrder;
const orderHistory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userOrders = yield OrderModel_1.default.findOne({ user: req.user.id });
        res.status(200).json({ userOrders });
    }
    catch (error) {
        console.log(error.message);
        res.sendStatus(500).send({ message: error.message });
    }
});
exports.orderHistory = orderHistory;
