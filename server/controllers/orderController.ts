import { NextFunction, Request, Response } from "express"
import Order from "../models/OrderModel";

export const newOrder =async (req:Request, res:Response, next:NextFunction) => {
    console.log(req.body)
    try {
        const {
            shippingInfo, 
            orderItems,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
        } = req.body

        const order = await Order.create({
            shippingInfo, 
            orderItems,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
            PaidAt: Date.now(),
            user: req.user.id
        })
        return res.status(200).json({order})
    } catch (error:any) {
        console.log(error.message)
        res.sendStatus(500).send({message:error.message})
    }
}

export const orderHistory = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const userOrders = await Order.findOne({user:req.user.id});
        res.status(200).json({userOrders})
    } catch (error:any) {
        console.log(error.message)
        res.sendStatus(500).send({message:error.message})
    }
}
