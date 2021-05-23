const express= require("express")
const router= express.Router()
const Input= require ('../models/input.js')
const isLoggedIn=require('../utils/isloggedin.js')

router.get("/search",isLoggedIn,(req,res)=>{

  res.render("search.ejs")

})
router.post("/search",(req,res)=>{

	const start= new Date(req.body.start_time).toISOString().replace(/T/, ' ').replace(/\..+/, '')
	const end= new Date(req.body.end_time).toISOString().replace(/T/, ' ').replace(/\..+/, '')
	

  //start_datetime, end_datetime, user_id
	res.redirect(`/search/response/?start_datetime=${start}&end_datetime=${end}&user_id=${req.user._id}`)

})


module.exports= router
