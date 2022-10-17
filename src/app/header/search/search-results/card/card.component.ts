import { Component, OnInit } from '@angular/core';
import { mockResponse } from '../../../../mock/mock-response';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private shared: DataService) {}

  mock = mockResponse;

  cards = this.mock.items;

  luck: any;

  ngOnInit(): void {
    this.luck = this.shared.getMessage();

    console.log(this.cards);
  }
}
