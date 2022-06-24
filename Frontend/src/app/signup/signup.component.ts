import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,Validators,FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthData } from '../signup/auth-data.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup = new FormGroup({
    name:new FormControl (null,Validators.required ),
    email:new FormControl (null,[Validators.email,Validators.required]),
    password: new FormControl (null, Validators.required)
  })
  signup(){
    if(!this.signupForm.valid){
      console.log("Invalid Form");return;
    }
    console.log(JSON.stringify(this.signupForm.value));
  }
  


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
