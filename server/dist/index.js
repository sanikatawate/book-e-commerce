"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./db/connect"));
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const orderRoute_1 = __importDefault(require("./routes/orderRoute"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const port = 5000;
const app = (0, express_1.default)();
(0, connect_1.default)();
app.get("/", (req, res) => {
    res.send("lalala");
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/books", bookRoute_1.default);
app.use("/auth", authRoute_1.default);
app.use("/order", orderRoute_1.default);
// app.use(cors({
//     origin:"http://localhost:5173",
//     methods:["POST", "GET", "PUT", "DELETE"],
// }))
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });
app.post("/api/data", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
