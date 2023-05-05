const mongoose = require('mongoose');
const schemat = mongoose.Schema({
    name:String,
    age:Number,
    department:String
}, {versionKey:false});
const AuthModel = mongoose.model('item',schemat );
module.exports = {AuthModel};