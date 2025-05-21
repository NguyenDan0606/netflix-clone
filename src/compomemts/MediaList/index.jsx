import React, { useEffect, useState } from "react";
import MovieCart from "./MovieCart";

const MediaList = () => {
  const [mediaList, setMediaList] = useState();
  const [activeTabId]=useState('all');
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day", {
      method: "GET",
      headers: {
        accept: "applications/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDE5N2M0NDA4NWI1MjUxYTUwMmU0NzUxOTc2YTcxYSIsIm5iZiI6MTc0NTY3NzcyOS45MDksInN1YiI6IjY4MGNlZGExNzFkZWRjYjhhY2VhYWVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cpM_5YPFZR0yFMkJ6MfAADFEZ52tOKiycdygrEo0JdI",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      const trendingMediaList = data.results.slice(0, 12);
      setMediaList(trendingMediaList);
    });
  }, []);
  return (
    <div className="px-8 text-[1.2vw] py-10 bg-black text-white">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex gap-4 border-white border rounded">
          <li className=" bg-white text-black cursor-pointer px-2 py-1 rounded">
            All
          </li>
          <li className="cursor-pointer px-2 py-1 rounded">Movie</li>
          <li className="cursor-pointer py-1 px-2 rounded">TV Show</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaList?.map((media) => (
          <MovieCart
            key={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
