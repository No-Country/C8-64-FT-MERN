const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    color_Id: {
        type: mongoose.Schema.objectId,
    },
    color_1: {
        type:String,
    },
    color_2: {
        type:String,
    },
    color_3: {
        type:String,
    },
    color_4: {
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