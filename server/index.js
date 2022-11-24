// const { count } = require('console');
const express = require('express');
const env = require('./utils/envConfig')
const connect = require('./utils/database.utils')
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();
// app.set('view engine', 'ejs');

//conexion a la base de datos
connect();

//se Agregar middlewares
app.use(cors())
app.use(express.json())

app.get('/',  (req, res) => {
    res.json({msg: 'Bienvenido al proyecto en la parte del backend!'})
})

app.use(routes);

const port = env.PORT || 3000;

app.listen(port, () => {
    console.log( `estamos activos ahora haber si funciona esto en el puerto ${port}`)
})

// const mongoString = process.env.DATABASE_URL

// mongoose.connect(mongoString);
// const database = mongoose.connection



// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })

// app.use(cors())
// app.use(express.json());
// app.use('/api', routes)

// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// })