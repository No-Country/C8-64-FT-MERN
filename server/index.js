const bodyParser = require('body-parser');
const { count } = require('console');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
require('dotenv').config();

//mongodb  
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Conectada'))
    .catch(err => console.log(err)
);

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors())
app.use(express.json());
app.use('/api', routes)

app.listen(process.env.PORT, () => console.log('Server on port:'+process.env.PORT)); 