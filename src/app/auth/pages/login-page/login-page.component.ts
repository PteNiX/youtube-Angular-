import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  loginStorage: any;

  public loginData() {
    sessionStorage.setItem('login', this.enter.login);
    sessionStorage.setItem('password', this.enter.password);
    this.loginStorage = this.enter.login;
    console.log(this.loginStorage);
  }

  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['./youtube/main']);


  }

  ngOnInit(): void {}
}
