
import express from "express"
import { Request, Response } from 'express';
import Order from "../models/OrderModel"

const router = express.Router()

router.post('/',async (req, res) => {
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
        const order = await Order.create(req.body)
        return res.status(200).json({order})
    } catch (error:any) {
        console.log(error.message)
        res.sendStatus(500).send({message:error.message})
    }
})

export default router
