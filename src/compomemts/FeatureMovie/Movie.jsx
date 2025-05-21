import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const Movie = (props) => {
  const { data: { backdrop_path, title, release_date, overview } } = props;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt="conan"
        className="aspect-video brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm: w-1/3">
        <p className="font-bold sm: text-[2vw] mb-2">
          {title}
        </p>
        <div>
          <p className="text-gray-400 border border-gray-400 inline-block p-1 mb-1">
            T13
          </p>
          <p>{release_date}</p>
        </div>
        <div>
          <div className="hidden sm:block text-[1.2vw] mt-4">
            <p className="font-bold mb-2">Overview</p>
            <p>
              {overview}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-white mr-4 text-black py-2 px-4 rounded text-[10px] lg:text-lg">
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
          <button className="bg-slate-300/35 rounded py-2 px-4 text-[10px] lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
