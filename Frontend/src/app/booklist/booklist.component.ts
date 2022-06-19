import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books:BookModel[] | any;
  imageWidth : number = 50;
  imageMargin: number = 25;

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
    })
  }

}
