const mongoose = require('mongoose');

const genderSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: 1,
        maxlength: 100
    }
});

const Gender = mongoose.model('Gender', genderSchema);

module.exports = { Gender };