const express=require('express')
const passport=require('passport')
const router= express.Router()
const User= require("../models/user.js")
const isLoggedIn=require('../utils/isloggedin.js')
//=======================================
//Signup Route
//=====================================
router.get("/signup", (req,res)=>{
	res.render("signup.ejs")
})

router.post("/signup",async (req,res)=>{
	try{
		const newUser=await User.register(new User(
		{
			username:req.body.username,
			email:req.body.email
		}),req.body.password );

		req.flash("success", `Signed up as ${newUser.username}`)

		passport.authenticate('local')(req,res, ()=>{
		res.redirect("/home");
	})

	}
	catch(err){
		console.log(err)

		if(err.keyPattern){
			req.flash("error", `Email already exists`)
		}
    else{
			req.flash("error", `Username already exists`)
		}
			res.redirect("/signup")



	}
})

//===================================================================
//login  route
//===============================================================
router.get("/login",(req,res)=>{
   res.render("login.ejs",{message: req.flash('message')})
})


router.post("/login", passport.authenticate('local',{

	successRedirect:'/home',
	failureRedirect:'/login',
	failureFlash : true

})

)
//==================
//logout route
//===================
router.get("/logout",(req,res)=>{
	req.logout();
	req.flash("success","logged you out")
  res.redirect("/login")

})
module.exports= router;
