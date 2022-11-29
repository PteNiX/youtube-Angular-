import { ISearchResults } from './search-results.model';

export interface SearchYoutube {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ISearchResults[];
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
