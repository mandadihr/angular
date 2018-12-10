import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../../services/api.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
isbnVal: any = '';
  constructor(public taskservice: TaskserviceService, public router: Router) { }

  ngOnInit() {
  }

  submit(isbn) {
    console.log('isbn' + isbn);
    localStorage.setItem('isbn', isbn);
    this.router.navigate(['book/bookdetails']);
  }

}
