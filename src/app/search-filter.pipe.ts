import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(cards: Array<any>, search: string): any {
    console.log(cards, search);

    search = search.toLowerCase();

    if (cards)
      return cards.filter(
        (d) => d.snippet.title.toLowerCase().indexOf(search) > -1
      );

    return cards;
  }
}
