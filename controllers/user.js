const User = require("../models/user.js");

//Signup
module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signup = async(req,res,next)=>{
    try{
        let {username,email,password}=req.body;
        const newUser = new User({email,username});
        const registerUser = await User.register(newUser,password);
        console.log(registerUser);
        req.login(registerUser,(err) => {
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to LoveLane");
            res.redirect("/listings");
        });
    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

//Login
module.exports.renderLoginForm = async(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.login = async(req,res) => {
    req.flash("success","Welcome back to LoveLane!");
    // if res.locals.redirectUrl does not exits then go to /listings
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

//Logout
module.exports.logout = (req,res,next)=>{
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out now!");
        res.redirect("/listings");
    });
};