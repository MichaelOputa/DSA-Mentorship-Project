import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/Mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
dotenv.config();



const port = process.env.PORT
const app = express();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "https://dsa-frontend-project-o7i5.vercel.app",
  "http://localhost:5173/login",
];
app.use(cors({
  origin: "allowedOrigins",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use("/api/auth",AuthRoutes)
app.use("/api/profile", profileRoutes);
// connecting to database


app.get("/api", (req, res) => {
  res.json({message:"Welcome to the DSA Project Backend API"});
})


app.get("/", (req, res) => {
  res.json("Welcome to the DSA Project Backend")
});


connectDB();

app.listen(8000, ()=>{
  console.log("server is running")

});