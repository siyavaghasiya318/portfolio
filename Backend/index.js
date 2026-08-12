import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectMongoDB from "./Config/DbConnnection.js"
import UserContact from "./Route/UserRout.js"

const app = express()

dotenv.config()

const port = process.env.PORT


app.use(express.json())
app.use(cookieParser())

const corsOrigin = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://portfolio-mu-sooty-65.vercel.app"
]

app.use(cors({
    origin: corsOrigin,
    credentials:true
}))

app.use("/api/contact", UserContact)
app.get("/", (req,res) => {
    res.send("Successfully running")
} )

app.listen(port, () => {
    console.log("Successfully run on", port);
    connectMongoDB()
    
})