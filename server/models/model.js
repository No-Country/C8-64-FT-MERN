const mongoose = require('mongoose');

//TIPO DE PRENDA: CLARA U OSCURA Y VALOR
const basedatos = new mongoose.Schema({
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

var exportaBaseDatos = mongoose.model('base', basedatos,'base');


module.exports = { exportaBaseDatos }
