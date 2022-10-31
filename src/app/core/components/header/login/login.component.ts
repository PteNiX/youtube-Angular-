import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginStorage: any = 'Your Name';

  loginPath = '../../../assets/images/login.png';

  ngOnInit(): void {
    if (sessionStorage.getItem('login') && sessionStorage.getItem('password')) {
      this.loginStorage = sessionStorage.getItem('login');
    }
  }
}
