const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    campingStyle: String,
    state: String
})

module.exports = mongoose.model('User', User)