import styles from "./MovieGrid.module.css";
import type { MovieGridProps } from "../../types/props";

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => {
        const posterSrc = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

        return (
          <li
            key={movie.id}
            className={styles.cardWrapper}
            onClick={() => onSelect(movie)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(movie);
            }}
          >
            <div className={styles.card}>
              <img
                className={styles.image}
                src={posterSrc}
                alt={movie.title}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
                }}
              />
              <h2 className={styles.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
