const express= require("express")
const router= express.Router()
const mongoose = require('mongoose');
const url = require('url');
const querystring = require('querystring')
const Input= require ('../models/input.js')
const isLoggedIn=require('../utils/isloggedin.js')

router.get("/GetAllInputValues",isLoggedIn, async(req,res)=>{
//start_datetime, end_datetime, user_id
const start = req.query.start_datetime;
const end = req.query.end_datetime;
const userId=req.query.user_id
try{
  const data= await Input.aggregate([
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

   ]).exec()

   if(data.length>0){
     res.setHeader('Content-Type', 'application/json');
     res.send(JSON.stringify(data, null, 2))
   }

   else{
     res.send("Sorry No Results Found")
   }

}catch(err){
    res.send("Sorry No Results Found")
}

})

router.get("/*",(req,res)=>{
res.send("This page isn't available, please check if you typed the address properly")

})

module.exports= router
