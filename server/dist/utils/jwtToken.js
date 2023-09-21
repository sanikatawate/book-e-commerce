"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendToken = (user, res) => {
    const token = user.getJWTToken();
    console.log(token);
    // options for cookie
    const options = {
        expiresIn: 7000000,
        secure: true,
        httpOnly: true,
    };
    res.status(200).cookie("token", token, options).json({ user, token, });
};
exports.default = sendToken;
