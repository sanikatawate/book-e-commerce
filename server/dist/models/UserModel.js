"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const cartSchema = new mongoose_1.Schema({ id: { type: Number, required: true }, quantity: { type: Number, required: true, default: 1 } });
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });
// Hash Password before saving in db
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const saltRounds = 10;
    this.password = bcrypt_1.default.hashSync(this.password, saltRounds);
    return next();
});
// Compare password
userSchema.methods.comparePassword = function (password) {
    return (bcrypt_1.default.compareSync(password, this.password));
};
// JWT token
userSchema.methods.getJWTToken = function () {
    if (process.env.JWT_SECRET_KEY === undefined)
        return console.log("Server Error");
    return jsonwebtoken_1.default.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
    });
};
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
