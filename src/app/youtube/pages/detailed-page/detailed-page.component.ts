import { Component, OnInit } from '@angular/core';
import { DetailedService } from '../../services/detailed.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  constructor(
    private sharedDetailed: DetailedService,
    private router: Router,
    private shared: DataService
  ) {}

  cards: any;

  dataForDetailedPage: any;

  arrayForOneCard: any;

  date: any;

  year: any;

  day: any;

  month: any;

  dayweek: any;

  FinalDate: any;

  math = Math;

  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  ngOnInit(): void {
    this.cards = this.shared.getCards();
    if (
      !sessionStorage.getItem('login') &&
      !sessionStorage.getItem('password')
    ) {
      this.router.navigate(['./login']);
    }

    this.dataForDetailedPage = this.sharedDetailed.getDetail();
    this.arrayForOneCard = this.cards.filter(
      (e: any) => e.id == this.dataForDetailedPage
    );

    if (this.dataForDetailedPage == undefined) {
      this.router.navigate(['./main/main']);
    }

    this.date = new Date(this.arrayForOneCard[0].snippet.publishedAt);

    this.year = this.date.getFullYear();

    this.day = this.date.getDate();

    this.month = this.date.getMonth();

    this.dayweek = this.date.getDay();

    this.days.forEach((day, index) => {
      if (index == this.date.getDay()) {
        this.dayweek = day;
      }
    });

    this.monthNames.forEach((month, index) => {
      if (index == this.date.getMonth()) {
        this.month = month;
      }
    });

    this.FinalDate =
      this.dayweek + ',' + this.month + ' ' + this.day + ',' + this.year;
  }
}
