var mongoose = require('../lib/db');

var Schema = mongoose.Schema;

var Classfiy = new Schema({
    name:{type:String},
    per:{type:String},
    createtime:{type:Date}
})

module.exports = mongoose.model('Classfiy',Classfiy);