import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskserviceService } from 'src/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email : any = '';
password: any = '';
loggedInFlag: any = false;

  constructor(public loginService : TaskserviceService, public router: Router) { }

  ngOnInit() {
  }
  submit() {
    console.log('email' + this.email);
    console.log('password' + this.password);
    var userInfo = {
      emailid: this.email,
      password: this.password
    }
      this.loginService.login(userInfo)
      .subscribe((res) => {
        if (res != null && res !== undefined && res.Status == 200 ) {
          this.loggedInFlag = true;
          localStorage.setItem('FirstName', res.FirstName)
          localStorage.setItem('UserId', res.UserId)
          localStorage.setItem('isLoggedIn', this.loggedInFlag);
          this.router.navigate(['book']);
        } else {
          this.router.navigate(['/login']);
        }
      }, (err) => {
        throw err;
      });
  }
}
