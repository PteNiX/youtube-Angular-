import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent implements OnInit {
  classToggled = false;

  constructor() {}

  ngOnInit(): void {}
}
