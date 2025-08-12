const express = require("express")
const app = express()
const port = 4005
const path  = require("path")
const cookieParser = require("cookie-parser")

const {connMongo} = require("./connection")
const {checkAuth, restrictToLogic} = require("./middleware/auth")
const Url = require("./models/url")

const urlrouter = require("./routes/url")
const staticRouter = require("./routes/staticRoute")
const userRouter = require("./routes/userRoute")

const url = "mongodb://localhost:27017/url_shortener"
connMongo(url)

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkAuth)

app.use("/api/url", restrictToLogic(["USERS", "ADMIN"]), urlrouter)
app.use("/user", userRouter)
app.use("/", staticRouter)

app.get("/:shortId", async(req, res) => {
 
    const shortId = req.params.shortId
    const entry = await Url.findOneAndUpdate(
        {
           shortId
        },
        {
           $push: {
               hitHistory:{
                    timestamp: Date.now()
               }
           }
        }
    )
    res.redirect(entry.redirectUrl)
})

app.listen(port, ()=> {
    console.log(`Server is Runnning ${port}`)
})