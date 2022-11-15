//Cantidad prenda
const mongoose = require('mongoose');

const GarmentSchema = new mongoose.Schema({
    garmentId: {
        type: mongoose.Schema.objectId,
    },
    price: {
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

const Garment = mongoose.model('prenda', GarmentSchema);
module.exports = {Garment}
