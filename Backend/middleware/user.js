//
function userMiddleware(req,res,next){
    //main authencticaiton logic
    //validate the headers from the admin database
    const username = req.headers.username;
    const password = req.headers.password;

    //check if username exists int he dB or not wiht given username and password
}

module.exports= userMiddleware;

