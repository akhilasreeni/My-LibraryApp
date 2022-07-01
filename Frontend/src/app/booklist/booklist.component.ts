import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books:BookModel[] | any;
  imageWidth : number = 50;
  imageMargin: number = 25;

  constructor(private bookservice:BookService,private router:Router) { }

  ngOnInit(): void {
    console.log('booklist component file');
      this.bookservice.getBooks().subscribe((data) => {
        this.books = JSON.parse(JSON.stringify(data));
        console.log(this.books);
      })    
  }
  
  updateBook(book:any){
    localStorage.setItem("updateBookId", book._id.toString());
    this.router.navigate(['/update']);
  }

  deleteBook(book:any)
  {
    this.bookservice.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter( p => p !== book);
      })
  

  }

}
