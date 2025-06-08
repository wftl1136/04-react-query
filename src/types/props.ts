import type { Movie } from "./movie";

export interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}