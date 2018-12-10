// import { Component, OnInit } from '@angular/core';
// import {TaskserviceService} from '../../services/api.service';

// @Component({
//   selector: 'app-tasks',
//   templateUrl: './tasks.component.html',
//   styleUrls: ['./tasks.component.css']
// })
// export class TasksComponent implements OnInit {
//  public news: any;
//  public userId = 1;
//  public user: any;
//   constructor( public taskservice: TaskserviceService) { }

//   ngOnInit() {
//     this.getName();
//     this.getNews();
//     this.myFunction();
//   }
//   getName() {
//     this.taskservice.getUserName(this.userId)
//     .subscribe((res) => {
//       if (res != null && res !== undefined) {
//         this.user = res[0].Name;
//         // console.log(this.user);
//       }
//       return false;
//     }, (err) => {
//       throw err;
//     });
//   }
//   getNews() {
//     this.taskservice.getNewsFromExternalSource()
//     .subscribe((res) => {
//       if (res != null && res !== undefined) {
//         this.news = res.articles;
//         // console.log(this.news);
//       }
//       return false;
//     }, (err) => {
//       throw err;
//     });
//   }

//   myFunction() {
//     window.open('https://www.google.com/');
//   }
// }
