import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchForm: any = {
    text: '',
  };

  responce: any;

  /*   @ViewChild('input')
  inputElement!: ElementRef;

  @Output() search1: EventEmitter<string> = new EventEmitter<string>(); */

  /*   getSearchValue(searchValue: string): void {  
    console.log(searchValue);
  } */

  /*   public searchValue = new Subject<string>(); */

  button: any;

  public getSearchValue(word: string) {
    word;
    this.shared.setMessage(this.searchForm);
    /* console.log(word); */
  }

  constructor(private shared: DataService, private shared1: YoutubeService) {}

  public search() {
    this.shared1.getVideos(this.searchForm.text).subscribe((responce) => {
      this.responce = responce;
      this.shared.setMessageResponce(this.responce);
    });
  }

  ngOnInit(): void {
    this.shared.setMessage(this.searchForm);
    this.shared.setMessageResponce(this.responce);

    this.button = document.querySelector('.search-button');

/*     if (
      !sessionStorage.getItem('login') &&
      !sessionStorage.getItem('password')
    ) {
      this.button.setAttribute('disabled', true);
    } else {
      this.button.removeAttribute('disabled');
    } */
  }
  /*   ngAfterViewInit() {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((value: any) => value.length > 3),
        map((value) => value)
      )
      .subscribe((value) => {
        this.search1.emit(value);
      });
  } */
}
