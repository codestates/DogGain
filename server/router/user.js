const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/login', userController.logIn)
router.post('/logout', userController.logOut)
router.post('/signup', userController.signUp)
router.delete('/signout', userController.signOut)
router.patch('/profile', userController.editUserProfile)
router.get('/info', userController.getUserInfo)

module.exports = router;