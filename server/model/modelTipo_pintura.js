const mongoose = require('mongoose');

const tipoPinturaSchema = new mongoose.Schema({
    pintura_Id: {
        type: mongoose.Schema.objectId,
    },
    plastisol: {
        type:String,
    },
    pintura_al_agua: {
        type:String,
    },
    relieve: {
        type:String,
    },
    foil: {
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

const Pintura = mongoose.model('pintura', tipoPinturaSchema);
module.exports = {Pintura}