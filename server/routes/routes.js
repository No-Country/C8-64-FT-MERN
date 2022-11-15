const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()

module.exports = router;

//METODO POST PARA Shablon
router.post('/post/shablon', controllers.postShablon)
//METODO POST PARA PRENDA
router.post('/post/prenda', controllers.postPrenda)
//METODO POST PARA PINTURA
router.post('/post/pinturaClara', controllers.postPinturaClaro)
router.post('/post/pinturaOscura', controllers.postPinturaOscuro)


//*--------------------------------------------------- */
//? Matricería = (Tipo de Shablon) * (Cantidad Colores) // el tipo de shablon lo obtenemos con /api/get/shablon/:id y lo multiplicamos por lo que diga el usuario.
//METODO GET de shablon nuevo (id: 636f45a48535e24f50cf9c1e) o usado (id: 636f45ae8535e24f50cf9c22) y su valor
router.get('/get/shablon/:id', controllers.getShablon)
//METODO GET de la prenda si es claro(id = 636f45f08535e24f50cf9c24) u oscuro (id = 636f45ff8535e24f50cf9c26).
router.get('/get/prenda/:id', controllers.getPrenda)

router.get('/get/pinturaClara/:id', controllers.getPinturaClara)
/*IDS PINTURA CLARA: 636f45a48535e24f50cf9c1e: Pintura al Agua / 63703571c13532d21c574277: Plastisol / 6370358fc13532d21c574279: Relieve / 637035a3c13532d21c57427b: Foil / 637035aec13532d21c57427d: Glitter / 637036c3c13532d21c57427f: Corrosión / 637036e2c13532d21c574281: Dorado y Plateado */
router.get('/get/pinturaOscura/:id', controllers.getPinturaOscura)
/*IDS PINTURA OSCURA: 6370376d187205fe60ac0ad1: Pintura al Agua / 63703778187205fe60ac0ad3: Plastisol / 63703793187205fe60ac0ad5: Relieve / 637037a1187205fe60ac0ad7: Foil / 637037af187205fe60ac0ad9: Glitter / 637037c6187205fe60ac0adb: Corrosión / 637037d6187205fe60ac0add: Dorado y Plateado */
//?  USD POR PRENDA:
//? IF( PINTURA elegida por usuario == CLARA): { usamos coleccion pinturaClaro -> (y el tipo de pintura elegida)} / (Prendas fondo claro osea 250 * TamañoEstampaClaro)
//? OSEA QUE TENGO QUE CREAR UN MODELO DONDE GUARDE TamañoEstampaClaro donde guardo 3 valores ( Central: *1) ( Logo: *3.6) ( Full: /6.25 ) 
//? IF( PINTURA elegida por usuario == OSCURO): { usamos coleccion pinturaOscuro -> (y el tipo de pintura elegida)} / (Prendas fondo oscuro osea 190 * TamañoEstampaOscuro)
//? OSEA QUE TENGO QUE CREAR UN MODELO DONDE GUARDE TamañoEstampaOscuro donde guardo 3 valores ( Central: *1) ( Logo: *2.8) ( Full: /5.75 ) 






//Get all Method tipo prenda (no se va a usar mucho)
router.get('/getAll', async (req, res) => {
    try{
        const data = await exportaModeloTipoShablon.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})






//UPDATE PRECIO SHABLON (shablon nuevo (id: 636f45a48535e24f50cf9c1e) o usado (id: 636f45ae8535e24f50cf9c22))
router.patch('/updateShablon/:id', controllers.updateShablon)

//UPDATE PRECIO PRENDA (claro(id = 636f45f08535e24f50cf9c24) u oscuro (id = 636f45ff8535e24f50cf9c26))
router.patch('/updatePrenda/:id', controllers.updatePrenda)


//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await exportaModeloTipoShablon.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


