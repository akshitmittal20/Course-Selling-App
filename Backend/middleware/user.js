const {user} = require("../db")

function userMiddleware(req,res,next){
    //main authencticaiton logic
    //validate the headers from the admin database
    const username = req.headers.username;
    const password = req.headers.password;

    user.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.alert(403).json({
                msg:"User did not found"
            })
        }
    })
}

module.exports= userMiddleware;

