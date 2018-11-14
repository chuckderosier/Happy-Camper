const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const ideasController = require('../controllers/campsitesController')

router.get('/api/users', userController.index)
// router.post('/api/users/', userController.create)
// router.get('/api/users/:userId', userController.show)
// router.patch('/api/users/:userId', userController.update)
// router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/campsites', campsitesController.index)
// router.get('/api/campsites/:campsiteId', campsitesController.show)
// router.delete('/api/campsites/:campsiteId', campsitesController.delete)
// router.patch('/api/campsites/:campsiteId', campsitesController.update)
// router.post('/api/users/:userId/campsites', campsitesController.create)

module.exports = router
