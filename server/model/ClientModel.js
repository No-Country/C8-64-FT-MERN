//Cliente
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.objectId,
    },
    name: {
        type:String,
        required:true,
        trim:true,
    }, 
    lastname: {
        type:String,
        required:true,
    },
    password: {
        type: String,
        required: [true, 'porfavor enter en la contraseña'],
    }, 
    phone: {
        type:String,
        required:true,
    },
    address: {
        type:String,
        required:false,
        trim:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    country: {
        type:String,
    },
    status : {
        type: String,
        default: 'active'
    },
},
{
    timestamps : true,
}
);

const Client = mongoose.model('client', clientSchema);
module.exports = {Client}
