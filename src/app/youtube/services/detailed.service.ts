import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailedService {
  dataForDetailedPage: any;

  setDetail(dataDet: any) {
    this.dataForDetailedPage = dataDet;
  }

  getDetail() {
    return this.dataForDetailedPage;
  }

  constructor() {}
}
