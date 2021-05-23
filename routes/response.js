const express= require("express")
const router= express.Router()
const mongoose = require('mongoose');
const url = require('url');
const querystring = require('querystring')
const Input= require ('../models/input.js')
const isLoggedIn=require('../utils/isloggedin.js')

router.get("/search/response",isLoggedIn, (req,res)=>{
//start_datetime, end_datetime, user_id
const start = req.query.start_datetime;
const end = req.query.end_datetime;
const userId=mongoose.Types.ObjectId(req.query.user_id)

Input.aggregate([
  {
     "$match" : {
       "user_id": userId,
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
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 2))
})
.catch((err)=>{
    res.send(err)
})

})



module.exports= router
