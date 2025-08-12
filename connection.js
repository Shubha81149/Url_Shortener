const mongoose = require("mongoose")

async function connMongo(url) {

    return mongoose.connect(url)
            .then(()=>console.log("Suuceefully Connected.."))
            .catch((err)=>console.log("Error: ", err))
}

module.exports = {connMongo}