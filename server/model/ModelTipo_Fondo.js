const mongoose = require('mongoose');

const tipoFondoSchema = new mongoose.Schema({
    tipoFondo_Id: {
        type: mongoose.Schema.objectId,
    },
    claro: {
        type:String,
    },
    oscuro: {
        type:String,
    },
    status : {
        type: String,
        default: 'active'
    }
},
{
    timestamps : true,
}
);

const Fondo = mongoose.model('fondo', tipoFondoSchema);
module.exports = {Fondo}
