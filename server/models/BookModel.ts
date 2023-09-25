import mongoose from "mongoose";
import validator from "validator"

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    genre:[{
        type:String,
        required:true
    }],
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        default:1
    },
    rating:{
        type:Number,
        default:0
    },
    imageUrl:{
        type:String,
        required:true
    },
    user:{
        type :mongoose.Schema.ObjectId,
        ref: "User",
        required: true
      },
},
    { timestamps:true, }
)

const Book = mongoose.model('Book', bookSchema);
export default Book