import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, forkJoin } from 'rxjs';
import { SearchYoutube } from '../pages/search/models/search-youtube.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  public youtubeResults!: SearchYoutube[];

  getVideos(name: string): Observable<any> {
    const url = `search?part=snippet&q=${name}@type=video`;

    return forkJoin([
      this.http.get(url).pipe(map((v: any) => v.items)),
      this.http.get(url).pipe(
        switchMap((videoresponce: any) => {
          const idList: any = videoresponce.items.map(
            (item: any) => item.id.videoId
          );

          const statistics = this.http
            .get(`videos?part=statistics&id=${idList.join(',')}`)
            .pipe(map((v: any) => v.items));
          return statistics;
        })
      ),
    ]);

    /*     const generalRequest = this.http.get<SearchYoutube>(url);
    const generalRequest1 = this.http.get<SearchYoutube>(url); */

    /*     const idRequest = this.http.get<SearchYoutube>(url).pipe(
      map((videoresponce: any) => {
        const idList: any = videoresponce.items.map(
          (item: ISearchResults) => item.id.videoId
        );
        return idList;
      }),
      switchMap((idList) =>
        this.http.get(`videos?part=statistics&id=${idList.join(',')}`)
      )
    ); */

    /*     const idRequest = this.http.get<SearchYoutube>(url).pipe(
      switchMap((videoresponce: any) => {
        const idList: any = videoresponce.items.map(
          (item: ISearchResults) => item.id.videoId
        );

        const statistics = this.http.get(
          `videos?part=statistics&id=${idList.join(',')}`
        );

        const snippet = this.http.get(url);

        return forkJoin([
          this.http.get(`videos?part=statistics&id=${idList.join(',')}`),
          this.http.get(url),
        ]);
      })
    );

    return idRequest; */

    /*    const all = generalRequest.pipe(
      map((snippet) =>
        idRequest.pipe(map((statistics) => ({ snippet, statistics })))
      )
    ); */
    /* const all1 = combineLatest([generalRequest, generalRequest1]).pipe(take(1)); */

    /* return generalRequest; */
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
  }
}
