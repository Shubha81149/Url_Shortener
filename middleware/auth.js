const {getUser} = require("../services/authentication")

function checkAuth(req, res, next) {

    const tokenCookie = req.cookies?.token
    req.user = null
    if(!tokenCookie) return next()

    const user = getUser(tokenCookie)
    // if(!user) return res.redirect("/login")
   
    req.user = user
    return next()    
}

function restrictToLogic(roles = []) {

   return function(req, res, next){   //clouser

    if(!req.user) return res.redirect("/login")
      
    if(!roles.includes(req.user.role)) return res.end("You are Not Authorized..")  // who's are not include role those are UnAuthorized.. 
        
    return next()    
   }
}

module.exports = {checkAuth, restrictToLogic}