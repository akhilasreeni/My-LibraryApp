import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooklistComponent,
    AddbookComponent,
    UpdatebookComponent,
    LandingpageComponent,
    LoginComponent,
    SignupComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
