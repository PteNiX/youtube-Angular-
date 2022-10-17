import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchForm: any = {
    text: '',
  };

  showSearch() {
    document
      .querySelector('.search-result')
      ?.classList.add('search-result-active');
  }

  constructor(private shared: DataService) {}

  ngOnInit(): void {
    this.shared.setMessage(this.searchForm);
  }
}
