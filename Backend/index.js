const express= require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const booklist = require('./src/model/Bookmodel');

const app = new express;
app.use(cors());
app.use(bodyparser.json());
app.get('/books', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    booklist.find()
    .then(function(book){
        res.send(book);
    })
})

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

    var book = {
        bookId: req.body.item.bookId,
        bookName: req.body.item.bookName,
        authorName: req.body.item.authorName,
        description: req.body.item.description,
        price: req.body.item.price,
        imageURL: req.body.item.imageURL
    }
    var books = new booklist(book);
    books.save();
})

app.listen(3000,()=>{
    console.log("Server up and running in Port 3000");
})
