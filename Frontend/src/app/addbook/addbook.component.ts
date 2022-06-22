import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { BookModel } from '../booklist/book.model';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookItem = new BookModel(0,'','','',0,'');
  constructor(private bookservice:BookService, private router:Router) { }

  ngOnInit(): void {
  }

  NewBook(){
    this.bookservice.addBooks(this.bookItem);
    alert('New Book added Successfully');
    this.router.navigate(['/books']);
  }

}
