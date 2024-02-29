const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://akshitmittal20:Am%40151220@29feb2024.hhq35ea.mongodb.net/")

const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'course'
    }
})


const courseSchema = new mongoose.Schema({
    title: String,
    price: 6000
})


const admin = mongoose.model('admin', adminSchema)
const user = mongoose.model('user', userSchema)
const course = mongoose.model('course', courseSchema)

module.exports={
    admin,
    user,
    course
}

user.updateOne(
    {
        "id":"...."
    },
    {
        $push:{
            purchasedCourses: courseId
        }
    }
)

user.updateOne({
    id:"1"
},{
    password:"newPassword"
})

user.updateMany({},{
    premium:true
})

user.deleteOne({
    username:"akshtimittal20@gmail.com"
})

