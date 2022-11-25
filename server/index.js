// const { count } = require('console');
const express = require('express');
const env = require('./utils/envConfig')
const connect = require('./utils/database.utils')
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();
const router = express.Router()

app.use(cors())
app.use(express.json())
app.use(routes);

//define endpoints
//----------------router post 
router.post('/post/base', router);
//----------------router get
router.get('/get/:id', router);
//UPDATE BASE
router.patch('/updateBase/:id', router);
//conexion a la base de datos
connect();

app.get('/',  (req, res) => {
    res.json({msg: 'Bienvenido al proyecto en la parte del backend!'})
})

const port = env.PORT || 3000;

app.listen(port, () => {
    console.log( `El back funcionara en el puerto ${port}`)
})
