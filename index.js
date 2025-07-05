import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/Mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth",AuthRoutes)
app.use("/api/profile", profileRoutes);
// connecting to database





app.get("/", (req, res) => {
  res.json("Welcome to the DSA Project Backend")
});


connectDB();

app.listen(8000, ()=>{
  console.log("server is running")

});