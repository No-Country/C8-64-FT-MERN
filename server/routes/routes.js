const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router();

module.exports = router;

//POST BASE
router.post('/post/base', controllers.postBase);
//POST usermodel
router.post('/post/user', controllers.postcreateUser)
//UPDATE BASE
router.patch('/updateBase/:id', controllers.updateBase)


//LOGIN
router.get('/login', controllers.login);
// Get content endpoint
router.get('/content/:id', controllers.getContent);
router.get('/users', controllers.getUsers);


