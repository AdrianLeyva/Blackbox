'use strict';
//Modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining Schema
var folderSchema = new Schema({
    name : String,
    password : String,
    createdAt : Date,
    updatedAt : Date,
    isHided : Boolean
});

//Creating model
var Folder = mongoose.model('Folder', folderSchema);

//Exporting
module.exports = Folder;