"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendToken = (user, res) => {
    const token = user.getJWTToken();
    // options for cookie
    const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        secure: true,
        httpOnly: true,
    };
    res.status(200).cookie("token", token, options).json({ user, token, sucess: true });
};
exports.default = sendToken;
