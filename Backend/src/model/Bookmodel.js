const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://akhilasreeni:MerryChristmas@libraryapp.yxrar.mongodb.net/?retryWrites=true&w=majority");
console.log("connected to DB");
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