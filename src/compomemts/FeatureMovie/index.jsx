import React, { useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "applications/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDE5N2M0NDA4NWI1MjUxYTUwMmU0NzUxOTc2YTcxYSIsIm5iZiI6MTc0NTY3NzcyOS45MDksInN1YiI6IjY4MGNlZGExNzFkZWRjYjhhY2VhYWVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cpM_5YPFZR0yFMkJ6MfAADFEZ52tOKiycdygrEo0JdI",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 6);
      setActiveMovieId(popularMovies[0].id);
      setMovies(popularMovies);
    });
  }, []);

  return (
    <div>
      <div className="relative text-white">
        {movies.length > 0 &&
          movies
            .filter((movie) => movie.id === activeMovieId)
            .map((movie) => <Movie key={movie.id} data={movie} />)}
        <PaginateIndicator movies={movies} activeMovieId={activeMovieId} setActiveMovieId={setActiveMovieId}/>
      </div>
    </div>
  );
};

export default FeatureMovie;
