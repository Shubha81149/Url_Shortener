const shortid = require("shortid")
const Url = require("../models/url")

async function createUrl(req, res) {

    const body  = req.body 
    if(!body.redirectUrl) return res.status(400).json({msg: "Url Field are required.."})
    const shortID = shortid(8)
    
    await Url.create({

        shortId: shortID,
        redirectUrl: body.redirectUrl,
        hitHistory: [],
        generatedBy: req.user._id
    })
    // return res.status(201).json({msg: "Created", id: shortID})
    return res.render("home", {
        id: shortID
    })
}

async function getAnalytics(req, res) {

    const shortId = req.params.shortId
    const result = await Url.findOne({shortId})
    res.status(200).json({totalClicks: result.hitHistory.length, analytics: result.hitHistory})
}

module.exports = {createUrl, getAnalytics}