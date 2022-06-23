import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  server_address: string ='api';
  constructor(private http:HttpClient) { }

  getBook(id:any){
    return this.http.get<any>('${this.server_address}'+id);
  }

  getBooks(){
    //return this.http.get('http://localhost:3000/books');
    return this.http.get<any>('${this.server_address}/books');
  }

  addBooks(item:any){
    //return this.http.post('http://localhost:3000/insert', {item}).subscribe((data) => {console.log(data)});
    return this.http.post<any>('${this.server_address}/insert', {item}).subscribe((data) => {console.log(data)});
  }

  updateBook(book:any){
    console.log('clientupdate');
    //return this.http.put("http://localhost:3000/update",book)
    return this.http.put<any>('${this.server_address}/update',book)
    .subscribe(data => {console.log(data)})
  }

  deleteBook(id:any)
  {
    // return this.http.delete("http://localhost:3000/delete/"+id)
    return this.http.delete<any>('${this.server_address}/delete/'+id);

  }
}
