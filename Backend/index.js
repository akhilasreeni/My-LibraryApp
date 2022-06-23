const express= require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const booklist = require('./src/model/Bookmodel');
const userlist = require("./src/model/UserModel");

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

app.get('/:id', (req,res)=> {
    const id = req.params.id;
    booklist.findOne({"_id" : id})
    .then((book) => {
        res.send(book);
    });
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
    var book = new booklist(book);
    book.save();
})

app.put('/update', (req,res) => {
    console.log(req.body)
    id=req.body._id,
    bookId= req.body.bookId,
    bookName= req.body.bookName,
    authorName= req.body.authorName,
    description= req.body.description,
    price= req.body.price,
    imageURL= req.body.imageURL
    booklist.findByIdAndUpdate({"_id":id},
                                    {$set:{"bookId":bookId,
                                            "bookName":bookName,
                                            "authorName":authorName,
                                            "description":description,
                                            "price":price,
                                            "imageURL":imageURL}})
            .then(function(){
                res.send();
            })
})

app.delete('/delete/:id',(req,res)=>{
   
    id = req.params.id;
    booklist.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

app.post('/login', (req, res) => {
    let userData = req.body     
        if (!username) {
          res.status(401).send('Invalid Username')
        } 
        else if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
    })


app.post('/signup',function(req,res){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
        var user = {
            name: req.body.name,
            email: req.body.email,  
            password: req.body.password 
        }
        var user = new userlist(user);
        user.save();
        res.send();
    })  
     
app.listen(3000,()=>{
    console.log("Server up and running in Port 3000");
})
