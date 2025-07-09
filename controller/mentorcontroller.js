import bcrypt from "bcryptjs";
import MentorModel from "../models/mentorSchema.js";

const addMentor = async (req, res) => {
  const salt = 10

  try {
    const { name, email, password, availability, bio, topic, } = req.body;

     const hashPassword = await bcrypt.hash(password, salt);

    const mentor = new MentorModel({
      name,
      email,
      hashPassword: password,
      availability,
      bio,
      topic,
      
    })

    await mentor.save();
    return res.status(200).json({
      message: "Mentor added successfully"
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error"
    });
  }
}
const BookSession = async (req, res) => {
  try {

  } catch (error) {

  }
  
}


const getMentor = async (req, res) => {
  try {

    const getMentor = await MentorModel.find();
    res.status(200).json({
      message: "Mentors fetched successfully",
      data: getMentor
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error"
    });
  }

};

export { addMentor, BookSession, getMentor };