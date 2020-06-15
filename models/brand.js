const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: 1,
        maxlength: 100
    },
    image:{
        type: String,
        default:''
    }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = { Brand }