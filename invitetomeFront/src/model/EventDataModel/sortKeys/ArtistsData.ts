export interface ArtistsData {
  artists: Artist[];
  artistsQty: number
}

export interface Artist {
  headliner: boolean;
  genre: string;
  name: string;
  id: number
  festivals?: { [key: string]: string };
}