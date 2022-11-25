const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()

module.exports = router;

//----------------router post 
router.post('/post/base', controllers.postBase);
//----------------router get
router.get('/get/:id', controllers.getBase);
//UPDATE BASE
router.patch('/updateBase/:id', controllers.updateBase);
