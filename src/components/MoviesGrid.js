import React from "react";
import "../styles.css";
import { useState, useEffect } from "react";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]); // initialising state with nothing - empty data

  //   const loadedMovies =
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
    // const m = ["s", "a", "i", "b", "a", "b", "a"];
  }, []);

  return (
  <div className="movies-grid">
    {
        movies.map(movie => (
            <div key={movie.id} className="movie-card">
                <img src={`images/${movie.image}`} alt={movie.title} />
                <div className="movie-card-info">
                    <h3 className="movie-card-title">{movie.title}</h3>
                    <p className="movie-card-genre">{movie.genre}</p>
                    <p className="movie-card-rating">{movie.rating}</p>

                </div>
            </div>
        ))
    }
    </div>
  );
}

export default MoviesGrid;
