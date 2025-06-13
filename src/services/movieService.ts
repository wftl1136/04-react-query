import axios from "axios";
import type {
  FetchMoviesParams,
  FetchMoviesResponse,
} from "../types/movie";


const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies({
  query,
  page = 1,
}: FetchMoviesParams): Promise<FetchMoviesResponse> {
  const response = await axios.get<FetchMoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`, 
        Accept: "application/json",
      },
    }
  );
  return response.data;
}