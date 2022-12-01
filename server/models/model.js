const mongoose = require('mongoose');

//TIPO DE PRENDA: CLARA U OSCURA Y VALOR
const basedatos = new mongoose.Schema({
    user:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    shablon_borrado: {
        required: true,
        type: Number
    },
    shablon_nuevo: {
        required: true,
        type: Number
    },
    shablon_usado: {
        required: true,
        type: Number
    },
    shablon_bajada: {
        required: true,
        type: Number
    },
    shablon_grabado: {
        required: true,
        type: Number
    },
    logo_claro: {
        required: true,
        type: Number
    },
    central_claro: {
        required: true,
        type: Number
    },
    full_claro: {
        required: true,
        type: Number
    },
    logo_oscuro: {
        required: true,
        type: Number
    },
    central_oscuro: {
        required: true,
        type: Number
    },
    full_oscuro: {
        required: true,
        type: Number
    },
    agua_fc: {
        required: true,
        type: Number
    },
    agua_fo: {
        required: true,
        type: Number
    },
    plastisol: {
        required: true,
        type: Number
    },
    relieve: {
        required: true,
        type: Number
    },
    foil: {
        required: true,
        type: Number
    },
    glitter: {
        required: true,
        type: Number
    },
    corrosion: {
        required: true,
        type: Number
    },
    dyp: {
        required: true,
        type: Number
    },
})

basedatos.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if (err) {
            callback(err);  
        }else{
            callback(err, same);
        }
    })
}


var exportaBaseDatos = mongoose.model('base', basedatos,'base');


module.exports = { exportaBaseDatos }
