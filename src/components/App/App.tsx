import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../api/tmdb";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import type { Movie } from "../../types/movie";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setMovies([]);

    try {
      const fetchResult = await fetchMovies({ query });
      setMovies(fetchResult.results);
      if (fetchResult.results.length === 0) {
        toast("No movies found for your request.");
      }
    } catch (err) {
      const errorMessage = `${err}`;
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={styles.app}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: { background: "#f40", color: "#fff" },
          error: { style: { background: "#f40", color: "#fff" } },
          success: { style: { background: "#2c7", color: "#fff" } },
        }}
      />
      <SearchBar onSubmit={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <MovieGrid movies={movies} onSelect={handleMovieSelect} />
      )}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
}
