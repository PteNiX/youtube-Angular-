import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  searchForm: any;

  searchDrop: any;

  responce: any;

  setMessage(data: any) {
    this.searchForm = data;
  }

  getMessage() {
    return this.searchForm;
  }

  setMessageResponce(data: any) {
    this.responce = data;
  }

  getMessageResponce() {
    return this.responce;
  }

  setMessageDrop(dataDrop: any) {
    this.searchDrop = dataDrop;
  }

  getMessageDrop() {
    return this.searchDrop;
  }

  constructor() {}
}
