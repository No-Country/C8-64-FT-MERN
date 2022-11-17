// Modelo Cotizacion
const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
    quotationId: {
        type: mongoose.Schema.ObjectId,
        ref:'Client',
    },
    backgroundType: {
        type:String,
        required:true,
    }, 
    PrintType: {
        type:String,
        required:true,
    },
    PaintType: {
        type:String,
        required:true,
    },
    shablonType: {
        type:String,
        required:true,
    },
    QuantityColor: {
        type:String,
        required:true,
    },
    QuantityPrint: {
        type:String,
        required:true,
    },
    price: {
        type:String,
        required:true,
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

const Quotation = mongoose.model('Quotation', quotationSchema);
module.exports = {Quotation}
