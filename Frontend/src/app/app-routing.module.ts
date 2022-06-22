import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path:"",
    component:LandingpageComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"books",
    component:BooklistComponent
  },
  {
    path:"add",
    component:AddbookComponent
  },
  {
    path:"update",
    component:UpdatebookComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
