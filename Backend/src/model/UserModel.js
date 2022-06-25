const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost:27017/Books');
// mongoose.connect('mongodb://localhost:27017/Books', (err)=>{
//     if(!err){console.log('MongoDB connections succeeded');}
//     else { console.log('Error in Mongodbconnection:'+ JSON.stringify(error,undefined,2));}
// });
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');  
 

const User = new Schema({  
    name: {type: String},
    email: { type: String, required: true, unique: true },  
    password: { type: String, required: true }  
});  

User.plugin(uniqueValidator); 

const userlist = mongoose.model('user',User);
module.exports = userlist;
