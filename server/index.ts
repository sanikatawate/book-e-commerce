import express from "express"
import connectDB from "./db/connect";
import bookRoute from "./routes/bookRoute"
import authRoute from "./routes/authRoute"
import orderRoute from "./routes/orderRoute"
import cors from "cors";
import cookieParser from "cookie-parser"

const port = 5000;
const app = express()

connectDB()

app.get("/",(req, res)=>{
    res.send("lalala")
})

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use("/books", bookRoute);
app.use("/auth", authRoute);
app.use("/order", orderRoute)
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

app.post("/api/data",(req, res)=>{
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})