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
exports.authUser = void 0;
require("dotenv/config");
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.cookies;
    if (!token) {
        res.status(400).send({ error: "Please authenticate using a valid token" });
    }
    try {
        if (process.env.JWT_SECRET_KEY === undefined)
            return res.status(200).json({ error: "Server rrr Error" });
        const data = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        if (typeof data === "object" && 'id' in data) {
            req.user = yield UserModel_1.default.findById(data.id).select("-password");
            next();
        }
        else {
            res.sendStatus(400).json({ error: "User Not Found" });
        }
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.authUser = authUser;
