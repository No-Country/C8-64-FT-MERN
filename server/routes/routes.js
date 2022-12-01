const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = router;

//----------------router post 
router.post('/post/base', controllers.postBase);
//----------------router get
router.get('/get/:id', controllers.getBase);
//UPDATE BASE
router.patch('/updateBase/:id', controllers.updateBase);

//LOGIN
router.get('/login', controllers.showLogin);
router.post('/login',urlencodedParser, controllers.authenticate)
