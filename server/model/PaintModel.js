//pintura
const mongoose = require('mongoose');

const paintTypeSchema = new mongoose.Schema({
    pinturaId: {
        type: mongoose.Schema.objectId,
    },
    plastisol: {
        type:String,
    },
    WaterPaint: {
        type:String,
    },
    relieve: {
        type:String,
    },
    foil: {
        type:String,
    },
    glitter: {
        type:String,
    },
    corrosion: {
        type:String,
    },
    gold_and_silver: {
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

const Paint = mongoose.model('paint', paintTypeSchema);
module.exports = {Paint}