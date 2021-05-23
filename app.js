//==============================
//npm import
//==============================
const express = require("express")
const app = express()
const fetch = require("node-fetch")
const bodyParser=require("body-parser")
const flash = require('connect-flash');
const mongoose = require('mongoose');
const methodOverride=require('method-override')
//const morgan= require("morgan")
//=============================================
//authentication imports
//==================================
const passport= require('passport')
const passportLocal= require("passport-local")
const expressSession= require('express-session')
const LocalStrategy= passportLocal.Strategy
//config imports
try{var config= require("./config.js")}
catch (e){
	console.log("could not import config")
	console.log(e)


}
try{
	mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
}
catch (e){
	console.log("could not connect")
    mongoose.connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})


}







//===================================
//models import
//==================================


const User= require("./models/user.js")
const Input=require("./models/input.js")

//=====================================
//use block
//===========================================
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//======================================
//express-session config
//===========================================
app.use(expressSession({
	 secret:process.env.ES_SECRET|| config.expressSession.secret,
	resave:false,
	saveUninitialized: false

}))

//connect flash
app.use(flash())


//======================
//passport config
//==================

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
passport.use(new LocalStrategy(User.authenticate()))

//=========================================
//current user middleware setting
//============================================


app.use((req,res,next)=>{

res.locals.user=req.user;

res.locals.errMessage=req.flash("error")
res.locals.successMessage=req.flash("success")
next();
})






//=======================================
//route imports( this should be after express and passport session or you get "did not use session.initializer error" )
//=====================================
const auth_routes=require("./routes/auth.js")
const root_route=require("./routes/root.js")
const home_route= require("./routes/home.js")
const search_route=require("./routes/search.js")
const res_route=require("./routes/response.js")



//================================

//use block
//===============================
app.set("view engine","ejs")
app.use(methodOverride('_method'))
app.use(express.static("public"))
//app.use(morgan('tiny'))

app.use(auth_routes )
app.use(root_route)
app.use(home_route)
app.use(search_route)
app.use(res_route)



app.listen(process.env.PORT || 3000,()=>{

	console.log("server running successfully ")
})
