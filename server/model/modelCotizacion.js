const mongoose = require('mongoose');

const cotizacionSchema = new mongoose.Schema({
    cotizacion_Id: {
        type: mongoose.Schema.objectId,
    },
    tipo_fondo: {
        type:String,
        required:true,
    }, 
    tipo_estampa: {
        type:String,
        required:true,
    },
    tipo_pintura: {
        type:String,
        required:true,
    },
    tipo_shablon: {
        type:String,
        required:true,
    },
    cantidad_color: {
        type:String,
        required:true,
    },
    cantidad_prenda: {
        type:String,
        required:true,
    },
    precio: {
        type:String,
        required:true,
    },
    status : {
        type: String,
        default: 'active'
    },
},
{
    timestamps : true,
}
);

const Cotizacion = mongoose.model('cotizacion', cotizacionSchema);
module.exports = {Cotizacion}
