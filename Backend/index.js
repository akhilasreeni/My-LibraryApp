const express= require('express');
const path= require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyparser = require('body-parser');
const booklist = require('./src/model/Bookmodel');
const userlist = require("./src/model/UserModel");
const PORT = process.env.PORT || 8080;

const app = new express;
app.use(express.static('./dist/frontend'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//middleware
app.use(bodyparser.json());

app.get('/*',function(req,res){
     res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
})

app.get('/api/books', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    booklist.find()
    .then(function(book){
        console.log('Booklist from DB read');
        res.send(book);
    })
})

app.get('/api/:id', (req,res)=> {
    const id = req.params.id;
    booklist.findOne({"_id" : id})
    .then((book) => {
        res.send(book);
    });
})

app.post('/api/insert',function(req,res){
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

app.put('/api/update', (req,res) => {
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

app.delete('/api/delete/:id',(req,res)=>{
   
    id = req.params.id;
    booklist.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

app.post('/api/login', (req, res) => {
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


app.post('/api/signup',function(req,res){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
        var user = {
            name: req.body.name,
            email: req.body.email,  
            password: req.body.password 
        }
        var user = new userlist(user);
        console.log(user);
        user.save((err,user)=>{
            if(err){
                console.log("error saving user to db");
              //return res.status(401).json({error:"Error saving to DB"});
            }
            else{
                let payload={subject:user._id};
                let token = jwt.sign(payload,'secretKey');
                res.status(200).send({token});
              //res.json({sucess:"Data saved"});
            }
        });
        //res.send();
});  
    

app.listen(PORT,()=>{
    console.log('Server up and running in Port');
})
