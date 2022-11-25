const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()

module.exports = router;

<<<<<<< HEAD
//----------------router post 
router.post('/post/base', controllers.postBase);
//----------------router get
router.get('/get/:id', controllers.getBase);
//UPDATE BASE
router.patch('/updateBase/:id', controllers.updateBase);
=======
//POST BASE
router.post('/post/base', controllers.postBase);
//METODO GET de shablon 
router.get('/get/:id', controllers.getBase);
//UPDATE BASE
router.patch('/updateBase/:id', controllers.updateBase)


>>>>>>> 6d400461b7f028ab5eec5dd27a1281aafa464e77
