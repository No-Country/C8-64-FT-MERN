//Modelo Estampado
const mongoose = require('mongoose');

const printSchema = new mongoose.Schema({
    TypePrintId: {
        type: mongoose.Schema.ObjectId,
        ref:'Quotation',
    },
    central: {
        type:String,
        required:false,
    },
    logo: {
        type:String,
        required:false,
    },
    full: {
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

const Print = mongoose.model('Print', printSchema);
module.exports = {Print}
