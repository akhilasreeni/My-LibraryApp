import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBook(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }

  getBooks(){
    return this.http.get('http://localhost:3000/books');
  }

  addBooks(item:any){
    return this.http.post('http://localhost:3000/insert', {item}).subscribe((data) => {console.log(data)});
  }

  updateBook(book:any){
    console.log('clientupdate');
    return this.http.put("http://localhost:3000/update",book)
    .subscribe(data => {console.log(data)})
  }

  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:3000/delete/"+id)

  }
}
