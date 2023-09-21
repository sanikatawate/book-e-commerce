import { Response } from "express";
const sendToken = (user:any, res:Response) => {
  const token = user.getJWTToken();
 console.log(token)
  // options for cookie
  const options = {
    expiresIn: 7000000,
    secure: true,
    httpOnly: true,
  };

  res.status(200).cookie("token", token, options).json({user,token,});
};

export default sendToken;