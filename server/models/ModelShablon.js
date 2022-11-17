//Modelo Shablon
const mongoose = require('mongoose');

const shablonSchema = new mongoose.Schema({
    shablonId: {
        type: mongoose.Schema.ObjectId,
        ref:'Quotation',
    },
    new: {
        type:String,
        required:false,
    },
    used: {
        type:String,
        required:false,
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

const Shablon = mongoose.model('Shablon', shablonSchema);
module.exports = {Shablon}