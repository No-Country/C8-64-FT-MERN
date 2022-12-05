const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// const auth = require('../middleware/auth')

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

