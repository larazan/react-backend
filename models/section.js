const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: 1,
        maxlength: 100
    }
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = { Section };