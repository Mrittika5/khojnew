function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		
		return next()
	}
	else{
		req.flash("error", `you need to login to view this page`)
		
		res.redirect("/login")
		
	}
	
}
module.exports=isLoggedIn