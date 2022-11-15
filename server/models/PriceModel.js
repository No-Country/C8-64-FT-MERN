//Precio
const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    priceId: {
        type: mongoose.Schema.objectId,
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

const Price = mongoose.model('precio', priceSchema);
module.exports = {Price}
