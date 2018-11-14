const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Campsite = new Schema({
    campsiteName: String,
    campsiteLocation: String,
    campsiteType: String,
    campsiteOpen: String,
    campsiteDescription: String,
    campsiteActivities: String,
    campsiteLinkToBook: String,
    campsiteImg: String
})

module.exports = mongoose.model('Campsite', Campsite)