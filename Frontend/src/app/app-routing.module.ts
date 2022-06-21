import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';


const routes: Routes = [
  {
    path:"",
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
