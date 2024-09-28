const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username:{type:"string",required:true},
    email:{type:"string",required:true},
    password:{type:"string",required:true}
})

var User = mongoose.model('User', userSchema);

module.exports = User;