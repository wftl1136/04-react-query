import axios from "axios";
import type {
  FetchMoviesParams,
  FetchMoviesResponse,
} from "../../types/movieApi"; 

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
  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWNhM2Y5YzcxZDgyM2ViYTdjZDNhZmJjMDA5NmE3ZSIsIm5iZiI6MTc0OTE1MTYyMC4zMTIsInN1YiI6IjY4NDFlZjg0NzMzNWQxZjc4MGFkOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fr0adJTVnO9iEJS0IIgSiVxOJiE-SOS9bHfY2AE8-s4`,
  Accept: "application/json",
},
    }
  );
  return response.data;
}
