import React from "react";

const PaginateIndicator = ({movies, activeMovieId, setActiveMovieId}) => {
  return (
    <div>
      <div className="absolute bottom-[10%] right-8">
        <ul className="flex gap-1">
          {movies.map((movie) => (
            <li onClick={() => setActiveMovieId(movie.id)}
              key={movie.id}
              className={`w-6 h-1 cursor-pointer ${activeMovieId === movie.id ? "bg-slate-100" : "bg-slate-600" }`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaginateIndicator;
