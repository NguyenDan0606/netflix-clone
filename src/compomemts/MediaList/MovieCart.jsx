import React from "react";
import CircularProgressBar from "./CircularProgressBar";
const MovieCart = ({ title, releaseDate, poster, point ,mediaType}) => {
  return (
    <div className="border border-slate-800 rounded-lg relative">
      {
        mediaType === "tv" && (
          <p className="absolute right-1 top-1 bg-black text-white p-1 text-sm rounded font-bold shadow-md" >Tv show</p>
        )
      }
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt=""
      />
      <div className="px-4  relative -top-[1.5vw]">
        <CircularProgressBar
          percent={Math.round(point * 10)}
          strokeColor={point >= 7 ? "green" : point >= 5 ? "orange" : "red"}
        />
        <p className="mt-2 font-bold">{title}</p>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCart;
