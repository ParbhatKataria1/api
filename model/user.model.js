const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:String,
    age:Number,
    department:String
}, {versionKey:false});
const Model = mongoose.model('item',schema );
module.exports = {Model};