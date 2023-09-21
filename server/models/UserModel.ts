import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

const cartSchema = new Schema({id:{type:Number, required:true}, quantity:{type:Number, required:true, default:1}})
const userSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique: true,
    },
    password: {
        type:String,
        required:true,
    },   
  },
    { timestamps:true}
  );

// Hash Password before saving in db
userSchema.pre("save", function (next) {
  if(!this.isModified("password")){
      return next();
  }
  const saltRounds = 10;
  this.password = bcrypt.hashSync(this.password, saltRounds);
  return next()
});

// Compare password
userSchema.methods.comparePassword = function(password:string) {
  return(bcrypt.compareSync(password, this.password));
};
  
// JWT token
userSchema.methods.getJWTToken = function () {
  if(process.env.JWT_SECRET_KEY===undefined) return console.log("Server Error")
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};

const User = mongoose.model('User', userSchema);
export default User;