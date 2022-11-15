const mongoose = require('mongoose');

const estampadoSchema = new mongoose.Schema({
    tipoEstampado_Id: {
        type: mongoose.Schema.objectId,
    },
    central: {
        type:String,
    },
    logo: {
        type:String,
    },
    completo: {
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

const Estampado = mongoose.model('estampado', estampadoSchema);
module.exports = {Estampado}
