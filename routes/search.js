const express= require("express")
const router= express.Router()
const Input= require ('../models/input.js')
const isLoggedIn=require('../utils/isloggedin.js')

router.get("/home/search",isLoggedIn,(req,res)=>{
	
+   res.render("show.ejs")
	
})
router.post("/home/search",(req,res)=>{

	const start= new Date(req.body.start_time).toISOString().replace(/T/, ' ').replace(/\..+/, '')
	const end= new Date(req.body.end_time).toISOString().replace(/T/, ' ').replace(/\..+/, '')
	
	Input.aggregate([
		{
		   "$match" : {
			   "user_id": req.user._id,
			   "payload" : { "$elemMatch" :
			   { "$and" : [{ "timestamp": {$gte: start, $lte: end } } ]}}
		               }
		},
		
		{
		   "$project" : {
			   "status": "success",
			   "_id":0,
			   "user_id" : "$user_id",
			   "payload" : {

				  "$filter" : {

					 "input" : "$payload",
					 "as" : "payload",
					 "cond" : {
						"$and" : [{ $gte: [ "$$payload.timestamp",start ] },{ $lte: [ "$$payload.timestamp",end ] } ]
					 }
				  }
			   }
		   }
		}

])
.exec()
.then((data)=>{
		res.send(data)
	})
.catch((err)=>{
		res.send(err)
	})
	
	
})


module.exports= router