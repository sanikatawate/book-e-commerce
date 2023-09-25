import express from "express";
import { authUser } from "../middleware/auth/authUser";
import { createBook, deleteBook, getAllBooks, updateBook } from "../controllers/bookController";

const router = express.Router()

router.route("/").get(getAllBooks);

router
  .route("/")
  .post(authUser, createBook)
  .put(authUser, updateBook)
  .delete(authUser, deleteBook);

module.exports = router;
// router.post("/", [
//     body('name', "Name cannot be empty").notEmpty(),
//     body('author', "Author cannot be empty").notEmpty(),
//     body('genre', "Genre cannot be empty").notEmpty(),
//     body('description', "Discription cannot be empty").notEmpty(),
//     body('price', "Price cannot be empty").notEmpty(),
//     body('imageUrl', "Image Url cannot be empty").notEmpty(),
// ] , authUser, async (req:Request, res:Response)=>{

//     const validationErrors = validationResult(req)
//     if(!validationErrors.isEmpty()){
//         res.status(400).json({errors: validationErrors.array()})
//     }

//     try {
//         console.log("sss", req.user.id)
//         const newBook = {
//             name: req.body.name,
//             author: req.body.author,
//             genre: req.body.genre,
//             description: req.body.description,
//             price: req.body.price,
//             stock: req.body.stock,
//             rating: req.body.rating,
//             imageUrl: req.body.imageUrl,
//             user: req.user.id,
//         };

    
//         console.log("lallala")
//         const book = await Book.create(newBook)
//         console.log("object")
//         return res.status(200).json({book})
        
//     } catch (error:any) {
//         console.log(error.message)
//         res.sendStatus(500).send({message:error.message})
//     }
// })

// router.get("/",async (req, res) => {
//     try {
//         const books = await Book.find({});
//         return res.status(200).json({books})
//     } catch (error:any) {
//         console.log("error", error.message)
//     }
// })


// router.put("/:id", authUser,async (req, res, next) => {
//     try {
//         let book = await Book.findById(req.params.id);
//         if(!book) return res.status(400).json({error: "Book not found"})
//         book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true, useFindandModify:false});
//         return res.status(200).json({book})
//     } catch (error:any) {
//         console.log("error", error.message)
//     }
// })

// router.delete("/:id", authUser,async (req, res, next) => {
//     try {
//         let book = await Book.findById(req.params.id);
//         if(!book) return res.status(400).json({error: "Book not found"})
//         await Book.findByIdAndRemove(req.params.id);
//         return res.status(200).json({message: "Book Deleted"})
//     } catch (error:any) {
//         console.log("error", error.message)
//     }
// })


// export default router;