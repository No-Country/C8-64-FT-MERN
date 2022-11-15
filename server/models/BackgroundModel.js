//Tipo Fondo
const mongoose = require('mongoose');

const BackgroundSchema = new mongoose.Schema({
    TypeBackgroundId: {
        type: mongoose.Schema.objectId,
    },
    light: {
        type:String,
    },
    dark: {
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

const Background = mongoose.model('Background', BackgroundSchema);
module.exports = {Background}
