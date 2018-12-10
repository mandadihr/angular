import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../../services/api.service';

@Component({
  selector: 'app-mylibrary',
  templateUrl: './mylibrary.component.html',
  styleUrls: ['./mylibrary.component.css']
})
export class MylibraryComponent implements OnInit {
  public list: any;
  public data: boolean = false;
  constructor(private taskservice: TaskserviceService) { }

  ngOnInit() {
    this.myBookLibrary();
  }
  myBookLibrary() {
    this.taskservice.getMyLibraryBooks()
      .subscribe((res) => {
        if (res != null && res !== undefined && res.Books.length > 0) {
          this.data = true
          this.list = res.Books;
          console.log('details' + this.list);
        } else {
          this.data = false;
          //return false;
        }
      }, (err) => {
        throw err;
      })
  }
}
