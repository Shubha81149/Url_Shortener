const express = require("express")
const router = express.Router()

const URL = require("../models/url")
const { createUrl } = require("../controller/url")
const { restrictToLogic } = require("../middleware/auth");

router.get("/admin/urls",restrictToLogic(["ADMIN"]), async(req, res) => {

    // if(!req.user) return res.redirect("./login")
    const allRoute = await URL.find({})
    return res.render("home", {
        urls: allRoute 
    })
})

router.get("/",restrictToLogic(["USERS", "ADMIN"]), async(req, res) => {

    console.log("User in middleware:", req.user);
    // if(!req.user) return res.redirect("./login")
    const allRoute = await URL.find({generatedBy: req.user._id})
    return res.render("home", {
        urls: allRoute 
    })
})

router.post("/main", createUrl)  // it's for browser based

router.get("/signup", async(req, res) => {

    return res.render("signup")
})

router.get("/login", async(req, res) => {

    return res.render("login")
})
module.exports = router

//main page....
// it will render the static-page and if u want contain all the url,
// in that static-page then you have to provied the common link and then static page link,
// like ''api/url/main''  then you then only the staic page will render..
// when u do some post method then you have to pass the url name like "/main" then only it will work.