import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }

  
  loginForm:FormGroup = new FormGroup({
    email:new FormControl (null,[Validators.email,Validators.required]),
    password: new FormControl (null, Validators.required)
  })
  login(){
    if(!this.loginForm.valid){
      console.log("Invalid Form");
      this.router.navigate(['/books']);  
      return;
    }
    console.log(JSON.stringify(this.loginForm.value));
  }

  
  ngOnInit(): void {
  }

}
