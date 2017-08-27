'use strict';
//Modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining Schema
var fileSchema = new Schema({
    id : String,
    name : String,
    value : String,
    size : Number,
    isUploaded : Boolean,
    isHided : Boolean,
    key : String,
    priority : String,
    author : String,
    createdAt : Date,
    updatedAt : Date
});

//Creating model
var File = mongoose.model('File', fileSchema);

//Exporting
module.exports = File;