const {admin} = require("../db/index.js")

function adminMiddleware(req,res,next){
    //main authencticaiton logic
    //validate the headers from the admin database
    const username = req.headers.username;
    const password = req.headers.password;

    admin.findOne({
        username : username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg:"The following username or pasword is incorrect or admin does not exists"
            })
        }
    })
    //this is the promise function

}

module.exports= adminMiddleware;