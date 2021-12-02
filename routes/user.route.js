const {Router} = require('express');
const userController = require('../controllers/user.controller');

const router = Router();
//api/users
router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser)

router
    .route('/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .put(userController.editUser)

module.exports = router;