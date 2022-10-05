export class SearchResponse {}

import { Item } from '../models/search-item.model';

export interface Responce {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
