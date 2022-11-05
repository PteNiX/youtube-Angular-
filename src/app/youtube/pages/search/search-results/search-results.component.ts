import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  constructor(private router: Router) {}

  mockResponse: any;

  ngOnInit(): void {
    if (
      !sessionStorage.getItem('login') &&
      !sessionStorage.getItem('password')
    ) {
      this.router.navigate(['./login']);
    }
  }
}
