const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()

module.exports = router;

//POST BASE
router.post('/post/base', controllers.postBase);
//METODO GET de shablon 
router.get('/get/:id', controllers.getBase);
//UPDATE BASE
router.patch('/updateBase/:id', controllers.updateBase)


