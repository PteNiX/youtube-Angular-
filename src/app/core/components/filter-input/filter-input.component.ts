import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { mockResponse } from '../../../youtube/mock/mock-response';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent implements OnInit {
  classToggled = false;

  searchDrop: any = {
    text: '',
  };

  mock = mockResponse;

  cards = this.mock.items;

  constructor(private shared: DataService) {}

  ngOnInit(): void {
    this.shared.setMessageDrop(this.searchDrop);
  }

  sortDatabyDate() {
    return this.cards.sort((a, b) => {
      return (
        <any>new Date(b.snippet.publishedAt) -
        <any>new Date(a.snippet.publishedAt)
      );
    });
  }

  sortDatabyViews() {
    return this.cards.sort((a, b) => {
      return (
        <any>new String(b.statistics.viewCount) -
        <any>new String(a.statistics.viewCount)
      );
    });
  }

  sortDatabyWord() {
    return this.cards.sort((a, b) => {
      return a > b ? 1 : -1;
    });
  }
}
