import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  constructor(private router: Router, private shared: DataService,) {}

  mockResponse: any;

  mainSearch: any;

  hide() {
    if (sessionStorage.getItem('mainInput')) {
      document.querySelector('.main-title')?.classList.add('main-hidden');
    }
  }

  ngOnInit(): void {
    this.mainSearch = this.shared.getMessage();
    if (
      !sessionStorage.getItem('login') &&
      !sessionStorage.getItem('password')
    ) {
      this.router.navigate(['./login']);
    }

    const obsUsingConstructor = new Observable((observer) => {
      const search2 = document.querySelector('.search-input');

      search2?.addEventListener('input', (event) => {
        observer.next(event);
        sessionStorage.setItem('mainInput', this.mainSearch.text);
      });
    });

    obsUsingConstructor.subscribe(() => this.hide());
  }
}
