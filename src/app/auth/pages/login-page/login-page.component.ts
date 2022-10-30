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
    localStorage.setItem('login', this.enter.login);
    localStorage.setItem('password', this.enter.password);
  }

  constructor() {}

  ngOnInit(): void {}
}
