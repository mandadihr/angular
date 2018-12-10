import { NgModule, Component } from '@angular/core';
// import { TasksComponent } from './tasks/tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';



const routes: Routes = [
  // {
  //   path: '',
  //   component: TasksComponent
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'book',
    component: BooksComponent
  },
  {
    path: 'book/bookdetails',
    component: BookDetailsComponent
  },
  // {
  //   path: 'header',
  //   component: HeaderComponent
  // },
  // {
  //   path: 'footer',
  //   component: FooterComponent
  // },
  {
    path: 'mybooks',
    component: MylibraryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
