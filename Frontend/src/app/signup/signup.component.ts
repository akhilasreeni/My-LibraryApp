import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthData } from '../signup/auth-data.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userItem=new AuthData('','','');
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onSignup(){
    this.authservice.CreateUser(this.userItem);
    alert('User Registration successfull');
    this.router.navigate(['/login']);    
  }

}
