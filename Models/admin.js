const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const AdminSchema =new Schema({
    name:{
        type: String,
        required: true,

    },
    age:{
        type: String,
        required: true,

    },
    experience:{
        type: String,
        required: true,

    },
    license:{
        type: String,
        required: true,

    },
    busno:{
        type: String,
        required: true,
    },

    cnic:{
        type: String,
        required: true,
    }




});

module.exports = mongoose.model('Admin',AdminSchema);