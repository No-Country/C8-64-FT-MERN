//Estampado
const mongoose = require('mongoose');

const printSchema = new mongoose.Schema({
    TypePrintId: {
        type: mongoose.Schema.objectId,
    },
    central: {
        type:String,
    },
    logo: {
        type:String,
    },
    full: {
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

const Print = mongoose.model('print', printSchema);
module.exports = {Print}
