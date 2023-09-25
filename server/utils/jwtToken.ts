import { Response } from "express";
const sendToken = (user:any, res:Response) => {
  const token = user.getJWTToken();
  // options for cookie
  const options = {
    expires: new Date(Date.now() + 7*24*60*60*1000),
    secure: true,
    httpOnly: true,
  };
  res.status(200).cookie("token", token, options).json({user,token,sucess:true});
};

export default sendToken;