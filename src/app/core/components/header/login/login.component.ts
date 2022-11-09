import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  loginStorage: any = 'Your Name';

  loginPath = './assets/images/login.png';

  Login: string = 'Login';

  buttonLogin: any;

  ngOnInit(): void {
    this.buttonLogin = document.querySelector('.logout');

    if (sessionStorage.getItem('login') && sessionStorage.getItem('password')) {
      this.loginStorage = sessionStorage.getItem('login');
      this.Login = 'Logout';
      this.buttonLogin.removeAttribute('disabled');
    } else {
      this.buttonLogin.setAttribute('disabled', true);
      this.router.navigate(['./login']);
    }
  }

  logout() {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    this.Login = 'Logout';
    window.location.reload();
  }
}
