const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/', 
    userController.listUsers
);

router.get('/delay',
    userController.listUsersDelay
);

module.exports = router;