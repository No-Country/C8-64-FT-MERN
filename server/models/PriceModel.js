//Modelo Precio
const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    priceId: {
        type: mongoose.Schema.ObjectId,
        ref:'Quotation',
    },
    price: {
        type:String,
        required: true,
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

const Price = mongoose.model('Price', priceSchema);
module.exports = {Price}
