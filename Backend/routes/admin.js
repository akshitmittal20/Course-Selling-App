const express = require ("express") 
const adminMiddleware = require("../middleware/admin")
const router = express.Router()

router.post(('/signup'), (req,res)=>{
    //route for the signup of the admin logic here
})

router.post(('/courses'), adminMiddleware, (req,res)=>{
    //impelement course creation logic here
})

router.get(('/courses'), adminMiddleware, (req,res)=>{
    //implement fetching all the courses logiv here
})

module.exports= router;