//Modelo Cantidad prenda
const mongoose = require('mongoose');

const GarmentSchema = new mongoose.Schema({
    garmentId: {
        type: mongoose.Schema.ObjectId,
        ref:'Quotation',
    },
    quantity: {
        type:number,
        required:true,
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

const Garment = mongoose.model('Garment', GarmentSchema);
module.exports = {Garment}

