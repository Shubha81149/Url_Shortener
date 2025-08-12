const express = require("express")
const router = express.Router()
const {createUrl, getAnalytics} = require("../controller/url")

// when we use '''app.use("/api/url", urlrouter)''' in index.js 
// then below code are required for postman and any testing side
router.post("/", createUrl) // it's for api testing
router.get("/analytics/:shortId", getAnalytics) // it's for api testing  

module.exports = router