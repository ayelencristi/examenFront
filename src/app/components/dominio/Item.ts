export class Item {
  poster_path?: string | undefined
  adult?: boolean
  overview?: string
  release_date?: string | undefined
  genre_ids?: number[];
  id: number;
  idFB?: string | undefined;
  original_title?: string;
  original_language?: string;
  title: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average: number;
  media_type?: string;
  watched?: string[]
  name?: string
};
