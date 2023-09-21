import "dotenv/config"
import User from "../models/User"
import jwt from "jsonwebtoken";
exports.fetchUser = async(req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        res.status(400).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(data.id).select("-password");
        next();
    } catch (error) {
        console.log(error.message)        
    }
}