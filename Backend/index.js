const express= require('express');
const cors = require('cors');
const booklist = require('./src/model/Bookmodel');

const app = new express;
app.use(cors());

app.get('/books', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    booklist.find()
    .then(function(book){
        res.send(book);
    })
})

app.listen(3000,()=>{
    console.log("Server up and running in Port 3000");
})
