export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
