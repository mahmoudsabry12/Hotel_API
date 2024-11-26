import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/room.js"
import hotelsRoute from "./routes/hotels.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()
mongoose.set('strictQuery', false);
dotenv.config()

 const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO  , {useNewUrlParser: false, useUnifiedTopology:false});
        //console.log("Connected to MongoDB");
      } catch (error) {
        throw error;
      }
 }
 app.get("/" , (req,res)=>{
  res.send("Mahmoud Sabry")
 })

 mongoose.connection.on("disconnected" , ()=>{
  console.log("MongoDB not connected");
 })

 mongoose.connection.on("connected" , ()=>{
  console.log("MongoDB connected");
 })


 //middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

 app.use("/api/auth" , authRoute)
 app.use("/api/users" , usersRoute)
 app.use("/api/rooms" , roomsRoute)
 app.use("/api/hotels" , hotelsRoute)
 app.use("/api/register" , authRoute)

 app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "something went wrong" 
  return res.status(errorStatus).json({
    success : false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
 })
// const PORT = process.env.PORT || 8800
app.listen(Number(process.env.PORT),"0.0.0.0", ()=>{
    connect()
    console.log("connected to backend");
})
