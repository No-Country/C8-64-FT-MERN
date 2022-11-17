//Cliente
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.objectId,
    },
    name: {
        type:String,
        required:[true, 'please provide a valid name'],
        trim:true,
    }, 
    lastname: {
        type:String,
        required:[true, 'please provide a valid lastname'],
    },
    password: {
        type: String, 
        required: [true, 'please provide a valid password'],
    }, 
    phone: {
        type:String,
        required:false,
    },
    address: {
        type:String,
        required:false,
        trim:true
    },
    email: {
        type:String,
        required:[true, 'please provide a valid email'],
        unique:true,
    },
    address: {
        country:{
            type:String,
            required:[true, 'must provide a valid country'],
        },
        state: {
            type:String,
            required: [false, 'must provide a valid state'],
        }
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
