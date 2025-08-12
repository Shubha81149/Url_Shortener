const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({

    shortId: { type: String, required: true, unique: true},
    redirectUrl:{ type: String, required: true},
    hitHistory:[ {timestamp: {type: Number}} ],
    generatedBy: {type: mongoose.Schema.Types.ObjectId, ref: "users"}
})

const Url = mongoose.model("url_Details", UrlSchema)

module.exports = Url