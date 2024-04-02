const express = require("express");
const router = express.Router()
const UserController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/AuthMiddleware");

router.post('/sign-up', UserController.createdUser)
router.post('/sign-in', UserController.loginUser)
router.post('/log-out', UserController.logoutUser)
router.put('/update-user/:id', UserController.updateUser)
router.delete('/delete-user/:id',authMiddleWare, UserController.deleteUser)
router.post('/delete-many',authMiddleWare, UserController.deleteMany)
router.get('/getAll',authMiddleWare, UserController.getAllUser)
router.get('/get-details/:id', authUserMiddleWare, UserController.getDetailsUser)
router.post('/refresh-token', UserController.refreshToken);

module.exports = router