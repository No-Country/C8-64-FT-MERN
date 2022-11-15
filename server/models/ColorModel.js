//Color
const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    colorId: {
        type: mongoose.Schema.objectId,
    },
    color1: {
        type:String,
    },
    color2: {
        type:String,
    },
    color3: {
        type:String,
    },
    color4: {
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

const Color = mongoose.model('color', colorSchema);
module.exports = {Color}