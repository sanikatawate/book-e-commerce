import "dotenv/config"
import User from "../../models/UserModel";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
      interface Request {
        user?: any; // Define the 'user' property as optional
      }
    }
  }
export const authUser = async(req:Request, res:Response, next:NextFunction)=>{
    const {token} = req.cookies;
    if(!token){
        res.status(400).send({ error: "Please authenticate using a valid token" })
    }
    try {
        if(process.env.JWT_SECRET_KEY===undefined) return res.status(200).json({error:"Server rrr Error"})
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(typeof data==="object" && 'id' in data){
            req.user = await User.findById(data.id).select("-password");
            next();
        }
        else{res.sendStatus(400).json({error: "User Not Found"})}
    } catch (error:any) {
        console.log(error.message)        
    }
}