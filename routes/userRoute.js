const express = require("express")
const router = express.Router()

const {createUserSignUp, findUserLogin} = require("../controller/user")

router.post("/", createUserSignUp)
router.post("/login", findUserLogin)
module.exports = router