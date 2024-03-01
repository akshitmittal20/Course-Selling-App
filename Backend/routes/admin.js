const express = require ("express") 
const adminMiddleware = require("../middleware/admin")
const router = express.Router()

const {admin, course}= require("../db/index")

router.post(('/signup'), (req,res)=>{
    //route for the signup of the admin logic here
    const username = req.body.username;
    const password = req.body.password;
    admin.create({
        // username: username,
        // password: password
        username,
        password    //same as above
    })
    res.json({
        msg:"Admin created succesfully"
    })
})
//this is not the ideal way. we should add await async , if the user is succesfully created ornot. and creation ofuser will depends on the presence of same usrname in the db.

//below is the ideal way, only the db checking is not present

// //this is using promises
// router.post(('/signup'), (req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;
//     admin.create({
//         username,
//         password   
//     })
//     .then(function(value){
//         res.json({
//             msg:"Admin created succesfully"
//         })
//     })
//     .catch(function(){
//         res.json({
//             msg:"Admin has not been creted"
//         })
//     })
// })

// //tis is using asycn await
// router.post(('/signup'), async (req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;
//     await admin.create({
//         username,
//         password   
//     })
//     res.json({
//             msg:"Admin created succesfully"
//         })
// })


router.post(('/courses'), adminMiddleware, async (req,res)=>{
    //impelement course creation logic here
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //zod can be used here!!

    const newCourse = await course.create({
        title,
        description,
        imageLink,
        price
    })

    console.log(newCourse)
    res.json({
        msg:"Course Created successfully", 
        courseId:newCourse._id
    })

})

router.get(('/courses'), adminMiddleware, async(req,res)=>{
        //implement fetching all the courses logiv here

    const allCourses = await course.find({
        //we want al the courss , that's why we will not send the filter for courses here. else we could have done like
        // price: 10000
    })
    res.send(allCourses)
});

module.exports= router;