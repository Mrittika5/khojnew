const mongoose = require('mongoose')

const PassportLocalMongoose =require("passport-local-mongoose")
const userSchema= new mongoose.Schema({
	
	
email:{type:String,required:true,unique:true},	
username:{type:String,required:true,unique:true}	
	
	
})
userSchema.plugin(PassportLocalMongoose)
const User= mongoose.model("user", userSchema)
module.exports= User;