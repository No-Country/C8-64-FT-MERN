const { count } = require('console');
const cors = require('cors');
var path = require('path');
var express = require('express')
const mongoose = require('mongoose');
const app = express();

const session = require('cookie-session');

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false,
    maxAge: 1000 * 60 * 15,
    cookie:{
    secure: true
    }
}));

require('dotenv').config();

const routes = require('./routes/routes');

//mongodb  
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Conectada'))
.catch(err => console.log(err)
);


app.use(cors())
app.use(express.json());
app.use('/api', routes)

app.listen(process.env.PORT, () => console.log('Server on port:'+process.env.PORT)); 