const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Campsite = new Schema({
    campsiteName: String,
    campsiteLocation: String,
    campsiteType: String,
    campsiteOpen: String,
    description: String,
    activities: String,
    linkToBook: String,
    img: String
})

module.exports = mongoose.model('Campsite', Campsite)