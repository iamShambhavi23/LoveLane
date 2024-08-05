if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Import routers
const listingRouter=require("./routes/listings.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

// const searchRouter=require("./routes/user.js");

//const mongoUrl='mongodb://127.0.0.1:27017/GastronomeHub';
const dbUrl = process.env.ATLASDB_URL;

// Database connection
main().then(()=>{
    console.log("connected to DB");
}).catch((err) => {
    console.log(err)
});

async function main() {
  await mongoose.connect(dbUrl);

}

// App settings
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true})); //for req.params;
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


//mongo store
const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto : {
        secret : process.env.SECRET,
    },
    touchAfter : 24*3600,
});

store.on("error",()=>{
    console.log("Error in mongo session store ",err);
});

// Session and flash configuration
const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized :true,
    cookie: {
        expires :Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    },
};

// app.get("/",(req,res)=>{
//     res.send("Working");
// });



app.use(session(sessionOptions));
app.use(flash());

//Middleware for passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware for flash message
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.curUser = req.user;
    next();
});


//Listing 
app.use("/listings",listingRouter);

//Review
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


// Error handling
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not found!"));
});

//Middleware
app.use((err,req,res,next)=>{
    let {status=500,message="Something went wrong!"}=err;
    res.status(status).render("error.ejs",{message});
    // res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("Server is listening to port 8080");
});