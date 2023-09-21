import "dotenv/config"
import mongoose from 'mongoose';

const connectDB = async()=>{
    if(process.env.MONGO_URI===undefined) return null
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo")
}

export default connectDB;


