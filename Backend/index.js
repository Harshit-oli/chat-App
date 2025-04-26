import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js"
import { App, server } from "./socketIO/server.js";
// const App=express();


dotenv.config({});
const PORT=process.env.PORT;
const URI=process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log("connected to MongoDB");
}catch(error){
    console.log(error);

}
App.use(express.json());
App.use(cookieParser());
App.use(cors());
App.use("/api/user",userRoute);
App.use("/api/message",messageRoute);
server.listen(PORT,()=>{
    console.log("check that my express working or not");
})
