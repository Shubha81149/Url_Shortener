const { v4: uuidv4 } = require("uuid");
const user = require("../models/user")
const {setUser} = require("../services/authentication")

async function createUserSignUp(req, res) {
 
    const {name, email, password} = req.body
    await user.create({
        name,
        email,
        password
    })
    return res.redirect("/")
}

async function findUserLogin(req, res) {
    
    const {email, password} = req.body
    const find = await user.findOne({email, password})
    if(!find) return res.render("login",{error: "Invalid UserName & Password"})

        // for "sessionId" 
    // const sessionId = uuidv4()
    // setUser(sessionId, find)
    // res.cookie("uid", sessionId)    
    // return res.redirect("/")

    //    for "token"

    const token = setUser(find)
    res.cookie("token", token)
    return res.redirect("/")
}

module.exports = {createUserSignUp,findUserLogin}