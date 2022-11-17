//Modelo Tipo Fondo
const mongoose = require('mongoose');

const BackgroundSchema = new mongoose.Schema({
    TypeBackgroundId: {
        type: mongoose.Schema.ObjectId,
        ref:'Quotation',
    },
    light: {
        type:String,
        required:false,
    },
    dark: {
        type:String,
        required: false,
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

const Background = mongoose.model('Background', BackgroundSchema);
module.exports = {Background}
