// const mongoose = require('mongoose')
// const env = require('./envConfig')
// const connect = async () => {
//     try {
//         await mongoose.connect(env.URL);
//         console.log('La base de datos se ah conectado!')
//     } catch (error) {
//         console.log(error.message)
//         process.exit;
//     }
// } 

// module.exports = connect

//mongodb  
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Conectada'))
    .catch(err => console.log(err)
);

module.exports = connect