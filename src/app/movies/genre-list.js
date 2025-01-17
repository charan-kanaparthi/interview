import { getGenereAndMovies } from "@/server/movies";
import MovieListCaraousel from "@/components/MovieListCarousel";

import { Suspense } from "react";

async function LoadedGenres() {
  const genre = await getGenereAndMovies();

  return (
    <div className="flex flex-col gap-4">
      {genre.map((genre, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <h2 className="font-semibold text-gray-800 text-md dark:text-white">
            {genre.title}
          </h2>
          <MovieListCaraousel movies={genre.movies} />
        </div>
      ))}
    </div>
  );
}

export default function GenreList() {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="text-2xl font-semibold ">Movies by Genre</div>
      <Suspense fallback={<div>Loading...</div>}>
        <LoadedGenres />
      </Suspense>
    </div>
  );
}
