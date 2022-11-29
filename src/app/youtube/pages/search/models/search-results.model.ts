export interface ISearchResults {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
}

interface Id {
  kind: string;
  videoId: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Thumbnails {
  default: ThumbnailsIn;
  medium: ThumbnailsIn;
  high: ThumbnailsIn;
  standard: ThumbnailsIn;
  maxres: ThumbnailsIn;
}

interface ThumbnailsIn {
  url: string;
  width: number;
  height: number;
}

interface Localized {
  title: string;
  description: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
