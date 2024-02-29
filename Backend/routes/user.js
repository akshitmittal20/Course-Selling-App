const express = require("express");
const userMiddleware = require("../middleware/user");
const router = express.Router();

router.post(('/signup'), (req, res)=>{
    //add user signup logic here 
})

router.get(('/courses'), (req,res)=>{
    //implement listing all the courses logic here
})

router.post(('/courses/:courseId'), userMiddleware, (req,res)=>{
    //implement course purchase logic here
})

router.get(('/purchasedCourses'), userMiddleware, (req, res)=>{
    //implement lsitng all the purchased courses logic here
})

module.exports= router

