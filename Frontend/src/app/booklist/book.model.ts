export class BookModel{
    constructor(
       public bookId: Number,
       public bookName: String,
       public authorName: String,
       public description: String,
       public price: Number,
       public imageURl: String
    ) { }
}