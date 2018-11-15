const User = require('../models/User')
const Campsite = require('../models/Campsite')

const campsitesController = {
  index: (req, res) => {
    let userId = req.params.userId
    User.findById(userId).populate('campsites')
      .then((user) => {
        res.send(user)
      })
  },
  show: (req, res) => {
    let campsiteId = req.params.campsiteId
    Campsite.findById(campsiteId)
      .then((campsite) => {
        res.send(campsite)
      })
  }
  // show: (req, res) => {
  //   const userId = req.params.userId
  //   User.findById(userId).populate(`campsites`).then((user) => {
  //     const campsiteId = req.params.campsiteId
  //     Campsite.findById(campsiteId)
  //       .then(campsite => {
  //         res.send({
  //           // campsite: campsite,
  //           user: user
  //         })
  //       })
  //   })
  // }
  //   delete: (req, res) => {
  //     let campsiteId = req.params.campsiteId
  //     Campsite.findByIdAndDelete(campsiteId)
  //       .then(() => {
  //         res.send(200)
  //       })
  //   },
  //   update: (req, res) => {
  //     let campsiteId = req.params.campsiteId
  //     Campsite.findByIdAndUpdate(campsiteId, req.body, { new: true })
  //       .then((updatedCampsite) => {
  //         updatedCampsite.save()
  //         res.send(updatedCampsite)
  //       })
  //   },
  //   create: (req, res) => {
  //     let userId = req.params.userId
  //     User.findById(userId)
  //       .then((user) => {
  //         console.log(user)
  //         Campsite.create(req.body)
  //           .then((newCampsite) => {
  //             console.log(newCampsite)
  //             user.campsites.push(newCampsite)
  //             user.save()
  //             res.send(newCampsite)
  //           })
  //       })
  //   }

}

module.exports = campsitesController
