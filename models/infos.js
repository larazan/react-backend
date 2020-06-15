const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const infosSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    description:{
        required: true,
        type: String,
        maxlength:100000
    },
    price:{
        required: true,
        type: Number,
        maxlength: 255
    },
    brand:{
        type: String,
        required: true,
        maxlength: 100
    },
    images:{
        type: Array,
        default:[]
    },
    sku:{
        required: true,
        type: String,
        maxlength: 100
    },
    category: {
        type: String,
        required: true,
        maxlength: 100
    },
    weight: {
        required: true,
        type: String,
        maxlength: 100
    },
    color: {
        required: false,
        type: String,
    },
    size: {
        required: false,
        type: String,
    },
    ingredients: {
        required: false,
        type: String
    },
    nutritional_value: {
        required: false,
        type: [Array]
    },
    country_of_origin: {
        required: true,
        type: String,
        maxlength: 100
    },
    preparation_n_usage: {
        required: false,
        type: String
    },
    packaging: {
        required: true,
        type: String,
        maxlength: 100
    },
    warning_and_precaution: {
        required: false,
        type: String
    },
    period_after_opening: {
        required: false,
        type: String
    },
    storage_information: {
        required: false,
        type: String
    },
    safety_information: {
        required: false,
        type: String
    },
    safety_instruction: {
        required: false,
        type: String
    },
    other_information: {
        required: false,
        type: String
    },
    fabric: {
        required: false,
        type: String
    },
    manufacturer: {
        required: true,
        type: String,
        maxlength: 255
    },
    barcode: {
        required: false,
        type: Number,
        maxlength: 100
    },
    available:{
        required: true,
        type: Boolean
    },
    publish:{
        required: true,
        type: Boolean
    },
    checked:{
        required: true,
        type: Boolean
    },
    deleted:{
        required: false,
        type: Boolean,
        default: false
    },
},{timestamps:true});

const Infos = mongoose.model('Infos', infosSchema);
module.exports = { Infos }