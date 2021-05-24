const express= require("express")
const router= express.Router()
//landing page
router.get("/",(req,res)=>{
res.render("welcome.ejs")
})



module.exports= router
