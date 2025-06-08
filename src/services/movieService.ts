import axios from "axios";
import type { Movie } from "../types/movie";

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface FetchMoviesParams {
  query: string;
  page: number;
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async ({
  query,
  page,
}: FetchMoviesParams): Promise<FetchMoviesResponse> => {
  const response = await axios.get<FetchMoviesResponse>(BASE_URL, {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      Accept: "application/json",
    },
  });
  return response.data;
};
