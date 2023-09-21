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
const express_validator_1 = require("express-validator");
const UserModel_1 = __importDefault(require("../models/UserModel"));
// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken"
require("dotenv/config");
const jwtToken_1 = __importDefault(require("../utils/jwtToken"));
const router = express_1.default.Router();
// const saltRounds = 10;
router.post('/signup', [
    (0, express_validator_1.body)('username', "Username cannot be empty").notEmpty(),
    (0, express_validator_1.body)('email', "Email cannot be empty").isEmail(),
    (0, express_validator_1.body)('password', "Password cannot be empty").notEmpty(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const validationErrors = (0, express_validator_1.validationResult)(req);
    if (!validationErrors.isEmpty()) {
        console.log(validationErrors);
        return res.status(400).send({ errors: validationErrors.array() });
    }
    try {
        let userEmail = yield UserModel_1.default.findOne({ email: req.body.email });
        if (userEmail) {
            res.status(400).json({ error: "Account with this email already exists" });
        }
        if (req.body.password != req.body.cnfpassword) {
            res.status(400).json({ error: "Enter correct password" });
        }
        // const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };
        const user = yield UserModel_1.default.create(newUser);
        // if(process.env.JWT_SECRET_KEY===undefined) return res.status(400).json({error: "Server Error"})
        // const authtoken = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
        (0, jwtToken_1.default)(user, res);
    }
    catch (error) {
        console.log(error.message);
        res.send(error);
    }
}));
router.post('/login', [
    (0, express_validator_1.body)('email', "Enter Valid Email").isEmail(),
    (0, express_validator_1.body)("password", "Password is incorrect").notEmpty()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const validationErrors = (0, express_validator_1.validationResult)(req);
    if (!validationErrors.isEmpty()) {
        res.status(400).json({ errors: validationErrors.array() });
    }
    try {
        const user = yield UserModel_1.default.findOne({ email: req.body.email });
        if (user === null) {
            res.status(400).json({ error: "Invalid Email or Password" });
        }
        // const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        const isPasswordCorrect = yield user.comparePassword(req.body.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }
        // if(process.env.JWT_SECRET_KEY===undefined) return res.status(400).json({error: "Server Error"})
        // const authtoken = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
        (0, jwtToken_1.default)(user, res);
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(error.message);
    }
}));
router.post('/logout', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        res.status(200).json({
            success: true,
            message: "Logged Out",
        });
    }
    catch (error) {
        console.log(error.message);
    }
}));
// router.post('/getuser', fetchUser, async (req:Request, res:Response, next) => {
//   try {
//     const user = await User.findById(req.user);
//     res.status(200).json({user})
//   } catch (error:any) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// })
exports.default = router;
