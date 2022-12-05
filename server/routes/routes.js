const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const auth = require('../middleware/auth')

module.exports = router;

//POST BASE
router.post('/post/base', controllers.postBase);
//UPDATE BASE
router.patch('/updateBase/:id', controllers.updateBase);
//get
router.get('/get/:id', controllers.getBase);


//LOGIN
router.get('/login', controllers.login);
// Get content endpoint
router.get('/content/:id', auth, controllers.getContent);
//logout
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});

