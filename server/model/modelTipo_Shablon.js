const mongoose = require('mongoose');

const shablonSchema = new mongoose.Schema({
    shablon_Id: {
        type: mongoose.Schema.objectId,
    },
    nuevo: {
        type:String,
    },
    usado: {
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

const Shablon = mongoose.model('shablon', shablonSchema);
module.exports = {Shablon}