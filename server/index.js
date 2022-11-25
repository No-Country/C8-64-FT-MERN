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

app.get('/',  (req, res) => {
    res.json({msg: 'Bienvenido al proyecto en la parte del backend!'})
})

const port = env.PORT || 3000;

app.listen(port, () => {
    console.log( `El back funcionara en el puerto ${port}`)
})
