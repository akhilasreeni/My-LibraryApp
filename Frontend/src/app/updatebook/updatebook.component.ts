import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../booklist/book.model';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  bookItem = new BookModel(0,'','','',0,'');
  constructor(private router:Router, private bookservice:BookService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("updateBookId");
    this.bookservice.getBook(bookId).subscribe((data) => {
      this.bookItem = JSON.parse(JSON.stringify(data));
    })
  }

  updateBook(){
    this.bookservice.updateBook(this.bookItem);
    alert('Sucess');
    this.router.navigate(['/']);
  }

}
