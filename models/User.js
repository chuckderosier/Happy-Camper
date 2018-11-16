const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    campingStyle: String,
    userState: String,
    campsites: [{
        type: Schema.Types.ObjectId,
        ref: 'Campsite'
    }
    ]
})

module.exports = mongoose.model('User', User)