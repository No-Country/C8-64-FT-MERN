const mongoose = require('mongoose');

const cotizacionSchema = new mongoose.Schema({
    cotizacion_Id: {
        type: mongoose.Schema.objectId,
    },
    tipo_fondo: {
        type:String,
        require:true,
    }, 
    tipo_estampa: {
        type:String,
        require:true,
    },
    tipo_pintura: {
        type:String,
        require:true,
    },
    tipo_shablon: {
        type:String,
        require:true,
    },
    cantidad_color: {
        type:String,
        require:true,
    },
    cantidad_prenda: {
        type:String,
        require:true,
    },
    precio: {
        type:String,
        require:true,
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
