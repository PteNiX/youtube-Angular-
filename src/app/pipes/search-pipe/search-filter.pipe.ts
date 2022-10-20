import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(cards: Array<any>, search: string): any {
    search = search.toLowerCase();
    const memoryCards = cards;
    if (cards && search)
      return cards.filter(
        (d) => d.snippet.title.toLowerCase().indexOf(search) > -1
      );

    return memoryCards;
  }
}
