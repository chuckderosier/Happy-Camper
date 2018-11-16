const User = require('../models/User')
const Campsite = require('../models/Campsite')
const mongoose = require('./connections')

const portStJoe = new Campsite({
    campsiteName: "Port St. Joe",
    campsiteLocation: "Florida Pan Handle.",
    campsiteType: "RV, tent, primitive",
    campsiteOpen: "Closed due to hurricane Michael.",
    campsiteDescription: "St. Joseph Peninsula State Park has miles of white sand beaches, striking dune formations, a heavily forested interior, and a favorable climate for year-round outdoor recreation.",
    campsiteActivities: "Swimming, Hiking, Boating, Fishing",
    campsiteLinkToBook: "https://www.reserveamerica.com/camping/th-stone-memorial-st-joseph-peninsula-state-park/r/campgroundDetails.do?contractCode=FL&parkId=281069",
    campsiteImg: "http://www.degeneratepress.com/travel/fla_2013/18_walk.jpg"
})

const cloudlandCanyon = new Campsite({
    campsiteName: "Cloudland Canyon",
    campsiteLocation: "Northwest Georgia and about 25 miles from Chattanooga.",
    campsiteType: "Cabin, RV, tent, primitive",
    campsiteOpen: "Year round.",
    campsiteDescription: "Located on the western edge of Lookout Mountain, this is one of the most scenic parks in the state, offering rugged geology and exceptional hiking. The park straddles a deep gorge cut into the mountain by Sitton Gulch Creek, and elevation differs from 800 to 1,980 feet.",
    campsiteActivities: "Swimming, Hiking, Boating, Fishing",
    campsiteLinkToBook: "https://www.reserveamerica.com/camping/cloudland-canyon-state-park/r/campgroundDetails.do?contractCode=GA&parkId=530148",
    campsiteImg: "http://www.degeneratepress.com/travel/chattanooga_2013/cc_fall10.jpg"
})

const chuck = new User({
    username: "Chuck",
    campingStyle: "tent, primitive",
    userState: "Georgia",
    campsites: [portStJoe, cloudlandCanyon]
})

const bear = new User({
    username: "Bear Grylls",
    campingStyle: "tent, primitive",
    userState: "Everywhere",
    campsites: []
})

User.remove({})
    .then(() => Campsite.remove({}))
    .then(() => portStJoe.save())
    .then(() => cloudlandCanyon.save())
    .then(() => chuck.save())
    .then(() => bear.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())