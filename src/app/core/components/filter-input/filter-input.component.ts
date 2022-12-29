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

  cards: any;

  sortByDate = false;

  sortByView = false;

  constructor(private shared: DataService) {}

  ngOnInit(): void {
    this.shared.setMessageDrop(this.searchDrop);
    this.cards = this.shared.getCards();
  }

  sortDatabyDate() {
    this.cards = this.shared.getCards();
    if (this.sortByDate == false) {
      this.sortByDate = true;
      return this.cards.sort((a: any, b: any) => {
        return (
          <any>new Date(b.snippet.publishedAt) -
          <any>new Date(a.snippet.publishedAt)
        );
      });
    } else {
      this.sortByDate = false;
      return this.cards.sort((a: any, b: any) => {
        return (
          <any>new Date(a.snippet.publishedAt) -
          <any>new Date(b.snippet.publishedAt)
        );
      });
    }
  }

  sortDatabyViews() {
    if (this.sortByView == false) {
      this.sortByView = true;
      return this.cards.sort((a: any, b: any) => {
        return (
          <any>new String(b.statistics.viewCount) -
          <any>new String(a.statistics.viewCount)
        );
      });
    } else {
      this.sortByView = false;
      return this.cards.sort((a: any, b: any) => {
        return (
          <any>new String(a.statistics.viewCount) -
          <any>new String(b.statistics.viewCount)
        );
      });
    }
  }

  sortDatabyWord() {
    return this.cards.sort((a: any, b: any) => {
      return a > b ? 1 : -1;
    });
  }
}
