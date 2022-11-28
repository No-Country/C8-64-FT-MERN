// const { count } = require('console');
const express = require('express');
const env = require('./utils/envConfig')
const connect = require('./utils/database.utils')
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();
const router = express.Router()
app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(routes);


connect();


app.get('/',  (req, res) => {
    res.json({msg: 'Bienvenido al proyecto en la parte del backend!'})
})


app.listen(process.env.PORT, () => console.log('El back funcionara en el puerto:'+process.env.PORT));



// const port = env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`El back funcionara en el puerto ${port}`)
// })
