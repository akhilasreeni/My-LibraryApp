import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './signup/auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
    
  
  CreateUser(item:any){
    return this.http.post('http://localhost:3000/signup', {item}).subscribe((data) => {console.log(data)});
  }
}
