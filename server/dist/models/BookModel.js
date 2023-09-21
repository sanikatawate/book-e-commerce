"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    genre: [{
            type: String,
            required: true
        }],
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    Stock: {
        type: Number,
        default: 1
    },
    rating: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
        required: true
    },
}, { timestamps: true, });
const Book = mongoose_1.default.model('Book', bookSchema);
exports.default = Book;
