const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        idbase: {
            type:String,
            required: true,
        },

        user:{
            type: String,
            required: true,
        },

        password:{
            type: String,
            required: true,
        },
    }
)


const modelUser = mongoose.model('user', userSchema,'user');
module.exports = { modelUser }