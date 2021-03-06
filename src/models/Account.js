'use strict';
//Modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining Schema
var accountSchema = new Schema({
    name : String,
    username : String,
    email : String,
    password : String,
    storage : String,
    createdAt : Date,
    updatedAt : Date,
    isLogged : Boolean
});

//Creating model
var Account = mongoose.model('Account', accountSchema);

//Exporting
module.exports = Account;