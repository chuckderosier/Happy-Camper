const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const campsitesController = require('../controllers/campsitesController')

router.get('/api/users', userController.index)
router.get('/api/users/:userId', userController.show)
router.post('/api/users', userController.create)
// router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/campsites', campsitesController.index)
router.get('/api/users/:userId/campsites/:campsiteId', campsitesController.show)
router.post('/api/users/:userId/campsites/:campsiteId', campsitesController.create)
// router.delete('/api/users/:userId/campsites/:campsiteId', campsitesController.delete)
// router.patch('/api/users/:userId/campsites/:campsiteId', campsitesController.update)

module.exports = router
