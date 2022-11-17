// Shablon
const mongoose = require('mongoose');

const shablonSchema = new mongoose.Schema({
    shablonId: {
        type: mongoose.Schema.objectId,
    },
    new: {
        type:String,
    },
    used: {
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