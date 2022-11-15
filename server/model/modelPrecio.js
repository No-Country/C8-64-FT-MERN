const mongoose = require('mongoose');

const precioSchema = new mongoose.Schema({
    precio_Id: {
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

const Precio = mongoose.model('precio', precioSchema);
module.exports = {Precio}
