const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Books');
const Schema = mongoose.Schema;

const Book = new Schema({
    bookId: Number,
    bookName: String,
    authorName: String,
    description: String,
    price: Number,
    imageURL: String
})

const booklist = mongoose.model('book',Book);
module.exports = booklist;