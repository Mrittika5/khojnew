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

//indexing user id and timestamp field since these fields will be used in query
inputSchema.index({"user_id": 1})
inputSchema.index({"payload.timestamp": 1})

const Input= mongoose.model("input", inputSchema)



module.exports= Input;
