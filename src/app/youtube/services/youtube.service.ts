import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, switchMap } from 'rxjs';

import { ISearchResults } from '../pages/search/models/search-results.model';
import { SearchYoutube } from '../pages/search/models/search-youtube.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  public youtubeResults!: SearchYoutube[];

  getVideos(name: string): Observable<any> {
    const url = `search?part=snippet&q=${name}@type=video`;

    return this.http.get<SearchYoutube>(url);
    /*   .pipe(
        map((videoresponce: any) => {
          const idList: any = videoresponce.items.map(
            (item: ISearchResults) => item.id.videoId
          );
          return idList;
        }),
        switchMap((idList) =>
          this.http.get(`videos?part=statistics&id=${idList.join(',')}`)
        )
      ) */

    /* .pipe(
        map((stat: any) => {
          const statistics: SearchYoutube[] = stat.items.map(
            (items: ISearchResults) => items.statistics
          );
          this.youtubeResults = statistics;
        })
      ); */
  }
}
