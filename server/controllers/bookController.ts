import { NextFunction, Request, Response } from "express"
import Book from "../models/BookModel"

export const createBook = async (req:Request, res:Response)=>{
    try {
        console.log("sss", req.user.id)
        const newBook = {
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            rating: req.body.rating,
            imageUrl: req.body.imageUrl,
            user: req.user.id,
        };
        console.log("lallala")
        const book = await Book.create(newBook)
        console.log("object")
        return res.status(200).json({book})
        
    } catch (error:any) {
        console.log(error.message)
        res.sendStatus(500).send({message:error.message})
    }
}

export const getAllBooks = async (req:Request, res:Response) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({books})
    } catch (error:any) {
        console.log("error", error.message)
    }
}


export const updateBook = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let book = await Book.findById(req.params.id);
        if(!book) return res.status(400).json({error: "Book not found"})
        book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true, useFindandModify:false});
        return res.status(200).json({book})
    } catch (error:any) {
        console.log("error", error.message)
    }
}

export const deleteBook =  async (req:Request, res:Response, next:NextFunction) => {
    try {
        let book = await Book.findById(req.params.id);
        if(!book) return res.status(400).json({error: "Book not found"})
        await Book.findByIdAndRemove(req.params.id);
        return res.status(200).json({message: "Book Deleted"})
    } catch (error:any) {
        console.log("error", error.message)
    }
}