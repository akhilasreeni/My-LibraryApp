import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//import { AuthData } from '../signup/auth-data.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: any;

  //validation function only
  signup(){
    if(!this.signupForm.valid){
      console.log("Invalid Form");return;
    }
    console.log(JSON.stringify(this.signupForm.value));
  }

  //userItem=new AuthData('','','');
  constructor(private authservice:AuthService,private router:Router) { }
  
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name:new FormControl (null,Validators.required ),
      email:new FormControl (null,[Validators.email,Validators.required]),
      password: new FormControl (null, Validators.required)
    })    
  }
  onSignup(signupForm){
    console.log("register button hit");
    this.authservice.CreateUser(this.signupForm.value);
    alert('User Registration successfull');
    this.router.navigate(['/login']);    
  }
  
  

}
