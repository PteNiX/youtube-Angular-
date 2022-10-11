import { Component, OnInit } from '@angular/core';
import { mockResponse } from '../../../../mock/mock-response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  mock = mockResponse;

  cards = this.mock.items;

  ngOnInit(): void {
    console.log(this.mock.items.length);
  }
}
