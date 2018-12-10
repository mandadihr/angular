import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  myBooks(){
    this.router.navigate(['mybooks'])
  }
  logout(){
    this.router.navigate(['login'])
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isbn');
    localStorage.removeItem('UserId');
    localStorage.removeItem('FirstName');

  }
  home(){
    this.router.navigate(['book'])
  }
}
