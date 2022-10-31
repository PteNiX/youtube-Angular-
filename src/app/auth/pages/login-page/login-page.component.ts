import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  enter: any = {
    login: '',
    password: '',
  };

  public loginData() {
    sessionStorage.setItem('login', this.enter.login);
    sessionStorage.setItem('password', this.enter.password);
  }

  constructor() {}

  ngOnInit(): void {}
}
