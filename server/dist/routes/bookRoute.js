"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookModel_1 = __importDefault(require("../models/BookModel"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
// Only Admin Access Allowed
router.post("/", [
    (0, express_validator_1.body)('name', "Name cannot be empty").notEmpty(),
    (0, express_validator_1.body)('author', "Author cannot be empty").notEmpty(),
    (0, express_validator_1.body)('genre', "Genre cannot be empty").notEmpty(),
    (0, express_validator_1.body)('description', "Discription cannot be empty").notEmpty(),
    (0, express_validator_1.body)('price', "Price cannot be empty").notEmpty(),
    (0, express_validator_1.body)('imageUrl', "Image Url cannot be empty").notEmpty(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validationErrors = (0, express_validator_1.validationResult)(req);
    if (!validationErrors.isEmpty()) {
        res.status(400).json({ errors: validationErrors.array() });
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
        const book = yield BookModel_1.default.create(newBook);
        return res.status(200).json({ book });
    }
    catch (error) {
        console.log(error.message);
        res.sendStatus(500).send({ message: error.message });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield BookModel_1.default.find({});
        console.log(books);
        return res.status(200).json({ books });
    }
    catch (error) {
        console.log("error", error.message);
    }
}));
// Only Admin Access Allowed
router.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let book = yield BookModel_1.default.findById(req.params.id);
        if (!book)
            return res.status(400).json({ error: "Book not found" });
        book = yield BookModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindandModify: false });
        return res.status(200).json({ book });
    }
    catch (error) {
        console.log("error", error.message);
    }
}));
router.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let book = yield BookModel_1.default.findById(req.params.id);
        if (!book)
            return res.status(400).json({ error: "Book not found" });
        yield BookModel_1.default.findByIdAndRemove(req.params.id);
        return res.status(200).json({ message: "Book Deleted" });
    }
    catch (error) {
        console.log("error", error.message);
    }
}));
exports.default = router;
