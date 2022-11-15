const mongoose = require('mongoose');

const prendaSchema = new mongoose.Schema({
    prenda_Id: {
        type: mongoose.Schema.objectId,
    },
    precio: {
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

const Prenda = mongoose.model('prenda', prendaSchema);
module.exports = {Prenda}
