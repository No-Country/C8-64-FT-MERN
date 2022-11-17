//Modelo pintura
const mongoose = require('mongoose');

const paintTypeSchema = new mongoose.Schema({
    paintId: {
        type: mongoose.Schema.ObjectId,
        ref:'Quotation',
    },
    plastisol: {
        type:String,
        required:false,
    },
    WaterPaint: {
        type:String,
        required:false,
    },
    relieve: {
        type:String,
        required:false,
    },
    foil: {
        type:String,
        required:false,
    },
    glitter: {
        type:String,
        required:false,
    },
    corrosion: {
        type:String,
        required:false,
    },
    gold_and_silver: {
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

const Paint = mongoose.model('Paint', paintTypeSchema);
module.exports = {Paint}