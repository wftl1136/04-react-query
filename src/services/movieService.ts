import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const options = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    Accept: "application/json",
  },
};

import type { Movie } from "../types/movie";

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async ({
  query,
  page,
}: {
  query: string;
  page: number;
}): Promise<FetchMoviesResponse> => {
  const response = await axios.get<FetchMoviesResponse>(
    `${BASE_URL}?query=${query}&page=${page}`,
    options
  );
  return response.data;
};
