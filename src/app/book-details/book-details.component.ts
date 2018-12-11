import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../../services/api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public isbn: any;
  public details: any;
  public owners: any;
  public msg: any;
  public ISBN: any;
  public title: any;
  public description: any;
  public author: any;
  public bookid: any;
  public BookBlob: any;
  public LibraryName: any;
  public ThumbNail: any;
  public SubTitle: any;
  public data: boolean = false;
  public addBook: boolean = false;
  public userId: any;

  constructor(private taskservice: TaskserviceService) { }

  ngOnInit() {
    this.isbn = localStorage.getItem('isbn');
    this.fetchBookDetails(this.isbn);
  }
  fetchBookDetails(isbn) {
    this.taskservice.getBookDetails(isbn)
      .subscribe((res) => {
        if (res != null && res !== undefined) {
          this.data = true;
          this.details = res.Books[0];
          this.owners = res.Owners;
          this.userId = parseInt(localStorage.getItem('UserId'));
          if (this.owners) {
            this.owners.forEach(function (element) {
              if (localStorage.getItem('FirstName') === element) {
                this.addBook = false;
              }
            })
          } 
          // else {
            this.addBook = true;
          // }

        }
        else {
          this.data = false
        }
      }, (err) => {
        throw err;
      });
  }

  add() {

    console.log(localStorage.getItem('isbn'))
    console.log(JSON.parse(this.details.BookBlob));
    this.author = this.details.Author;
    this.ISBN = this.details.Isbn;
    this.title = this.details.Title;
    this.description = this.details.Description;
    this.bookid = this.details.BookId;
    this.BookBlob = JSON.parse(this.details.BookBlob);
    this.LibraryName = this.details.LibraryName;
    this.ThumbNail = this.details.ThumbNail;
    this.SubTitle = this.details.SubTitle;


  }

  submit() {
    console.log(JSON.stringify(this.BookBlob));
    let bookObj = {
      Author: this.author,
      Isbn: this.ISBN,
      Title: this.title,
      Description: this.description,
      BookId: this.bookid,
      BookBlob: JSON.stringify(this.BookBlob),
      LibraryName: localStorage.getItem('FirstName'),
      ThumbNail: this.ThumbNail,
      SubTitle: this.SubTitle,
      UserId: localStorage.getItem('UserId')
    }
    console.log(bookObj);
    this.taskservice.addToLibrary(bookObj)
      .subscribe((res) => {
        if (res != null && res !== undefined && res.Status == 200) {
          this.msg = res.Info;
          console.log('details' + this.msg);
        }
        return false;
      }, (err) => {
        throw err;
      });
  }
}
