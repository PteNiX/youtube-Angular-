import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  public searchForm: any = {
    text: '',
  };

  showSearch() {
    document
      .querySelector('.search-result')
      ?.classList.toggle('search-result-active');
  }

  constructor() {}

  ngOnInit(): void {}
}
