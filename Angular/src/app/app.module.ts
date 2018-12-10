import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { TasksComponent } from './tasks/tasks.component';
import {TaskserviceService} from '../services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// For MDB Angular Pro
// import { SidenavModule, NavbarModule, WavesModule, AccordionModule } from 'ng-uikit-pro-standard';
// For MDB Angular Free
import { NavbarModule, WavesModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { MylibraryComponent } from './mylibrary/mylibrary.component';

@NgModule({
  declarations: [
    AppComponent,
    // TasksComponent,
    BooksComponent,
    BookDetailsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MylibraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NavbarModule, 
    WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [TaskserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
