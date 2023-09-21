import express, {Request, Response} from "express";
import Book from "../models/BookModel";
import { body, validationResult } from "express-validator"
const router = express.Router()


// Only Admin Access Allowed
router.post("/", [
    body('name', "Name cannot be empty").notEmpty(),
    body('author', "Author cannot be empty").notEmpty(),
    body('genre', "Genre cannot be empty").notEmpty(),
    body('description', "Discription cannot be empty").notEmpty(),
    body('price', "Price cannot be empty").notEmpty(),
    body('imageUrl', "Image Url cannot be empty").notEmpty(),
] ,async (req:Request, res:Response)=>{

    const validationErrors = validationResult(req)
    if(!validationErrors.isEmpty()){
        res.status(400).json({errors: validationErrors.array()})
    }

    try {
        const newBook = {
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            rating: req.body.rating,
            imageUrl: req.body.imageUrl,
        };
    
        const book = await Book.create(newBook)
        return res.status(200).json({book})
        
    } catch (error:any) {
        console.log(error.message)
        res.sendStatus(500).send({message:error.message})
    }
})

router.get("/",async (req, res) => {
    try {
        const books = await Book.find({});
        console.log(books)
        return res.status(200).json({books})
    } catch (error:any) {
        console.log("error", error.message)
    }
})

// Only Admin Access Allowed
router.put("/:id",async (req, res, next) => {
    try {
        let book = await Book.findById(req.params.id);
        if(!book) return res.status(400).json({error: "Book not found"})
        book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true, useFindandModify:false});
        return res.status(200).json({book})
    } catch (error:any) {
        console.log("error", error.message)
    }
})

router.delete("/:id",async (req, res, next) => {
    try {
        let book = await Book.findById(req.params.id);
        if(!book) return res.status(400).json({error: "Book not found"})
        await Book.findByIdAndRemove(req.params.id);
        return res.status(200).json({message: "Book Deleted"})
    } catch (error:any) {
        console.log("error", error.message)
    }
})


export default router;