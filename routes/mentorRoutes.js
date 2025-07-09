import express from "express";
import { addMentor, getMentor } from "../controller/mentorcontroller.js";
const mentorRoutes = express.Router()

mentorRoutes.post("/addMentor",addMentor )
mentorRoutes.get("/getMentor", getMentor)

export default mentorRoutes;