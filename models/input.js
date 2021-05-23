const mongoose = require('mongoose');


const inputSchema=new mongoose.Schema( {
	"user_id":{
			
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
	"payload":[
		{   _id : false,
			timestamp: String,
			
			input_values:String
		}
	]
	
	
})


const Input= mongoose.model("input", inputSchema)
module.exports= Input;