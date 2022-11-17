//Modelo Color
const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    colorId: {
        type: mongoose.Schema.ObjectId,
        ref:'Quotation',
    },
    color1: {
        type:String,
        required:false,
    },
    color2: {
        type:String,
        required:false,
    },
    color3: {
        type:String,
        required:false,
    },
    color4: {
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

const Color = mongoose.model('Color', colorSchema);
module.exports = {Color}