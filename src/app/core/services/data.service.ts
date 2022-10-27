import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  searchForm: any;

  searchDrop: any;

  setMessage(data: any) {
    this.searchForm = data;
  }

  getMessage() {
    return this.searchForm;
  }

  setMessageDrop(dataDrop: any) {
    this.searchDrop = dataDrop;
  }

  getMessageDrop() {
    return this.searchDrop;
  }

  constructor() {}
}
