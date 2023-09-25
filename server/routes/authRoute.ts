import express from "express"
import { Request, Response } from 'express';
import { body, validationResult } from "express-validator"
import User from "../models/UserModel"
// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken"
import "dotenv/config"
import sendToken from "../utils/jwtToken"
import { getUser, loginUser, signUpUser } from "../controllers/userController"
import { authUser } from "../middleware/auth/authUser"

const router = express.Router()
// const saltRounds = 10;

router.route('/signup').post(signUpUser)

router.route('/login').post(loginUser)

router.route('/logout').post(loginUser)

router.route('/getuser').post(authUser, getUser)

export default router;





// router.post('/signup', [
//     body('username', "Username cannot be empty").notEmpty(),
//     body('email', "Email cannot be empty").isEmail(),
//     body('password', "Password cannot be empty").notEmpty(),
// ] , async(req : Request, res : Response)=>{
//     console.log(req.body)
//     const validationErrors = validationResult(req);
//     if(!validationErrors.isEmpty()){
//         console.log(validationErrors)
//         return res.status(400).send({errors: validationErrors.array()})
//     }
//     try {
//         let userEmail = await User.findOne({email:req.body.email})
//         if(userEmail){
//             res.status(400).json({error:"Account with this email already exists"})
//         }

//         if(req.body.password!=req.body.cnfpassword){
//             res.status(400).json({error:"Enter correct password"})
//         }
//         // const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
//         const newUser = {
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         };
//         const user = await User.create(newUser)
//         // if(process.env.JWT_SECRET_KEY===undefined) return res.status(400).json({error: "Server Error"})
//         // const authtoken = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
//         sendToken(user, res);

//     } catch (error:any) {
//         console.log(error.message)
//         res.send(error)
//     }
// })

// router.post('/login', [
//     body('email', "Enter Valid Email").isEmail(),
//     body("password", "Password is incorrect").notEmpty()
// ] ,async(req:Request, res:Response)=>{
//     console.log(req.body)
//     const validationErrors = validationResult(req)
//     if(!validationErrors.isEmpty()){
//         res.status(400).json({errors:validationErrors.array()})
//     }
//     try {
//         const user = await User.findOne({email:req.body.email});
//         if(user===null){
//             res.status(400).json({error: "Invalid Email or Password"})
//         }
//         // const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
//         const isPasswordCorrect = await (user as any).comparePassword(req.body.password)
//         if(!isPasswordCorrect){
//             return res.status(400).json({error:"Invalid Email or Password"})
//         }
//         // if(process.env.JWT_SECRET_KEY===undefined) return res.status(400).json({error: "Server Error"})
//         // const authtoken = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
//         sendToken(user, res);
//         res.status(200).json({user})

//     } catch (error:any) {
//         console.log(error.message)
//     }
// })

// router.post('/logout',async (req, res, next) => {
//     try {
//         res.cookie("token", null, {
//             expires: new Date(Date.now()),
//             httpOnly: true,
//           });
        
//           res.status(200).json({
//             success: true,
//             message: "Logged Out",
//           });
        
//     } catch (error:any) {
//         console.log(error.message)
//     }
// })

// router.post('/getuser', fetchUser, async (req:Request, res:Response, next) => {
//   try {
//     const user = await User.findById(req.user);
//     res.status(200).json({user})
//   } catch (error:any) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// })

