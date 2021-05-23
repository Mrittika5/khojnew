const express= require("express")
const router= express.Router()
const Input= require ('../models/input.js')
const isLoggedIn=require('../utils/isloggedin.js')


router.get("/",(req,res)=>{
	res.send("welcome")
	
})
router.get("/home",isLoggedIn,(req,res)=>{
   const check=" "
   res.render("home.ejs", {check})

})
router.post("/home", (req,res)=>{
	
    const localISOTime = req.body.date_time
    const date_time=localISOTime.replace(/T/, ' ').replace(/\..+/, '')
    console.log(date_time)
	

	Input.updateOne( 
	  { user_id : req.user._id },
	  { $push: { payload: {timestamp:date_time,
				input_values:req.body.sorted_arr}} },
	  { upsert: true } )
	
		.then((data)=>{
		console.log("successfully updated")
	    })
		.catch ((err)=> {
		   console.log(err);
		})


	res.status(204).send()
	
	
})


module.exports= router