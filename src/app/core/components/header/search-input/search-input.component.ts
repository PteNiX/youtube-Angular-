import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchForm: any = {
    text: '',
  };

  button: any;

  showSearch() {
    document
      .querySelector('.search-result')
      ?.classList.add('search-result-active');
  }

  constructor(private shared: DataService, private router: Router) {}

  redirectToResults() {
    this.router.navigate(['./youtube/main/results']);
  }

  ngOnInit(): void {
    this.shared.setMessage(this.searchForm);
    this.button = document.querySelector('.search-button');

    if (
      !sessionStorage.getItem('login') &&
      !sessionStorage.getItem('password')
    ) {
      this.button.setAttribute('disabled', true);
    } else {
      this.button.removeAttribute('disabled');
    }
  }
}
