const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    cliente_Id: {
        type: mongoose.Schema.objectId,
    },
    nombre: {
        type:String,
        require:true,
        trim:true,
    }, 
    apellido: {
        type:String,
        require:true,
    },
    telefono: {
        type:String,
        require:true,
    },
    direccion: {
        type:String,
        require:false,
        trim:true
    },
    correo: {
        type:String,
        require:true,
        unique:true,
    },
    pais: {
        type:String,
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

const Cliente = mongoose.model('cliente', clienteSchema);
module.exports = {Cliente}
