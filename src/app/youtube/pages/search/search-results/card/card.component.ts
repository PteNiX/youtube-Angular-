/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { mockResponse } from '../../../../mock/mock-response';
import { DataService } from 'src/app/core/services/data.service';
import { DetailedService } from 'src/app/youtube/services/detailed.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(
    private shared: DataService,
    private sharedDetailed: DetailedService,
    private shared1: YoutubeService
  ) {}

  mock = mockResponse;

  dropSearch: any;

  mainSearch: any;

  currentDate = new Date();

  dataForDetailedPage: any;

  responce: any;

  responce2: any;

  cardsYoutube: any;

  results: any;

  url: any;

  cards: any;

  math = Math;

  test() {
    this.changeCardsColor();
  }

  search() {
    this.shared1.getVideos(this.mainSearch.text).subscribe({
      next: (data: any) => (
        (this.cardsYoutube = data),
        (this.cards = this.cardsYoutube[0].map((item: any, index: any) => ({
          ...item,
          ...this.cardsYoutube[1][index],
        }))),
        console.log(this.cards),
        this.changeCardsColor(),
        this.shared.setCards(this.cards)
      ),
    });
  }

  changeCardsColor() {
    document.querySelectorAll('.card').forEach((element) => {
      if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -1)) >
          604800000 &&
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -1)) <
          2592000000
      ) {
        element.children[4].classList.add('card-bottom-panel-green');
      } else if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -1)) >
          2592000000 &&
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -1)) <
          12960000000
      ) {
        element.children[4].classList.add('card-bottom-panel-yellow');
      } else if (
        Date.parse(this.currentDate.toString()) -
          Date.parse(element.children[5].innerHTML.slice(0, -1)) >
        12960000000
      ) {
        element.children[4].classList.add('card-bottom-panel-red');
      }
    });
  }

  ngAfterViewInit() {
    this.changeCardsColor();
  }

  showContacts(event: any): void {
    this.dataForDetailedPage = event.target.id;
    this.sharedDetailed.setDetail(this.dataForDetailedPage);
  }

  ngOnInit(): void {
    this.dropSearch = this.shared.getMessageDrop();
    this.mainSearch = this.shared.getMessage();
    this.responce = this.shared.getMessageResponce();

    const obsUsingConstructor = new Observable((observer) => {
      /* observer.next(); */

      const search2 = document.querySelector('.search-input');

      search2?.addEventListener('input', (event) => {
        if (this.mainSearch.text.length > 2) {
          observer.next(event);
        }
        sessionStorage.setItem('mainInput', this.mainSearch.text);
      });
    }).pipe(debounceTime(800), distinctUntilChanged());

    obsUsingConstructor.subscribe(() => this.search());
    obsUsingConstructor.subscribe(() =>
      setTimeout(() => {
        this.changeCardsColor();
      }, 1 * 1000)
    );

    /* 
  searchByClick(cart: any, search: string) {
    search = search.toLowerCase();

    if (cart && search) {
      cart = cart.filter(
        (d: any) => d.snippet.title.toLowerCase().indexOf(search) > -1
      );
    }
  } */
  }
}
