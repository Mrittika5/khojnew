const express= require("express")
const router= express.Router()
const Input= require ('../models/input.js')
const isLoggedIn=require('../utils/isloggedin.js')
//search route
router.get("/search",isLoggedIn,(req,res)=>{

  res.render("search.ejs")

})
router.post("/search",(req,res)=>{

	const start= req.body.start_time.replace(/T/, ' ').replace(/\..+/, '')
	const end= req.body.end_time.replace(/T/, ' ').replace(/\..+/, '')
  //start_datetime, end_datetime, user_id
	res.redirect(`/GetAllInputValues/?start_datetime=${start}&end_datetime=${end}&user_id=${req.user._id}`)

})


module.exports= router
