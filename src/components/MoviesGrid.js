import React from "react";
import "../styles.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]); // initialising state with nothing - empty data
  const [searchTerm, setSearchTerm] = useState("");

  //   const loadedMovies =
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
    // const m = ["s", "a", "i", "b", "a", "b", "a"];
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default MoviesGrid;
