import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { AuthData } from './signup/auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //server_address: string ='api';
  constructor(private http:HttpClient) { }
    
  
  CreateUser(data){
    console.log("authservice is called");
    return this.http.post('http://localhost:3000/signup',data);
    //return this.http.post('http://localhost:3000/signup', {user}).subscribe((data) => {console.log(data)});
   // return this.http.post<any>(`${this.server_address}/signup`, {userItem}).subscribe((data) => {console.log(data)});
  }
}
