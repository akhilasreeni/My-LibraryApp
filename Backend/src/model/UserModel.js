const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost:27017/Books');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');  
 

const User = new Schema({  
    name: String,
    email: { type: String, required: true, unique: true },  
    password: { type: String, required: true }  
});  

User.plugin(uniqueValidator); 

const userlist = mongoose.model('user',User);
module.exports = userlist;
