import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  searchForm: any;

  setMessage(data: any) {
    this.searchForm = data;
  }

  getMessage() {
    return this.searchForm;
  }

  constructor() {}
}
