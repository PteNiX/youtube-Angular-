/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { mockResponse } from '../../../../../mock/mock-response';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private shared: DataService) {}

  mock = mockResponse;

  cards = this.mock.items;

  dropSearch: any;

  mainSearch: any;

  currentDate = new Date();

  changeCardsColor() {
    document.querySelectorAll('.card').forEach((element) => {
      /*       console.log(
        Date.parse(this.currentDate.toString()),
        Date.parse(element.children[5].innerHTML.slice(0, -6))
      ); */

      if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) >
          604800000 &&
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) <
          2592000000
      ) {
        element.children[4].classList.add('card-bottom-panel-green');
      } else if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) >
          2592000000 &&
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) <
          12960000000
      ) {
        element.children[4].classList.add('card-bottom-panel-yellow');
      } else if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) >
        12960000000
      ) {
        element.children[4].classList.add('card-bottom-panel-red');
      }
    });
  }

  ngAfterViewInit() {
    document.querySelectorAll('.card').forEach((element) => {
      if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) >
          604800000 &&
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) <
          2592000000
      ) {
        element.children[4].classList.add('card-bottom-panel-green');
      } else if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) >
          2592000000 &&
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) <
          12960000000
      ) {
        element.children[4].classList.add('card-bottom-panel-yellow');
      } else if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -6)) >
        12960000000
      ) {
        element.children[4].classList.add('card-bottom-panel-red');
      }
    });
  }

  ngOnInit(): void {
    this.dropSearch = this.shared.getMessageDrop();
    this.mainSearch = this.shared.getMessage();
    this.changeCardsColor();
  }

  searchByClick(cart: any, search: string) {
    search = search.toLowerCase();

    if (cart && search) {
      cart = cart.filter(
        (d: any) => d.snippet.title.toLowerCase().indexOf(search) > -1
      );
    }
  }
}
