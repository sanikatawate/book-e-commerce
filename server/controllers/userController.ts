import { NextFunction, Request, Response } from "express"
import User from "../models/UserModel"
import sendToken from "../utils/jwtToken"

export const signUpUser =async (req:Request, res:Response) => {
    console.log(req.body)
    try {
        if(!req.body.username || !req.body.email || !req.body.password){
            res.status(400).json({error:"Please Enter All Fields"})
        }
        let userEmail = await User.findOne({email:req.body.email})
        if(userEmail){
            res.status(400).json({error:"Account with this email already exists"})
        }

        if(req.body.password!=req.body.cnfpassword){
            res.status(400).json({error:"Enter correct password"})
        }
        // const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };
        const user = await User.create(newUser)
        // if(process.env.JWT_SECRET_KEY===undefined) return res.status(400).json({error: "Server Error"})
        // const authtoken = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
        sendToken(user, res);

    } catch (error:any) {
        console.log(error.message)
        res.send(error)
    }
}

export const loginUser = async(req:Request, res:Response)=>{
    console.log(req.body)
    try {
        const user = await User.findOne({email:req.body.email});
        if(user===null){
            res.status(400).json({error: "Invalid Email or Password"})
        }
        // const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        const isPasswordCorrect = await (user as any).comparePassword(req.body.password)
        if(!isPasswordCorrect){
            return res.status(400).json({error:"Invalid Email or Password"})
        }
        // if(process.env.JWT_SECRET_KEY===undefined) return res.status(400).json({error: "Server Error"})
        // const authtoken = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
        sendToken(user, res);
        res.status(200).json({user})

    } catch (error:any) {
        console.log(error.message)
    }
}

export const logoutUser = async(req:Request, res:Response, next:NextFunction) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
          });
        
          res.status(200).json({
            success: true,
            message: "Logged Out",
          });
        
    } catch (error:any) {
        console.log(error.message)
    }
}

export const getUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
    const user = await User.findById(req.user);
    res.status(200).json({user})
    } catch (error:any) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
}