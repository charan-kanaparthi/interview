"use client";

import { useState } from "react";
import FallbackImage from "./FallbackImage";
import FavouriteIcon from "./FavouriteIcon";
import { addFavouriteMovie, removeFavouriteMovie } from "@/server/movies";

export default function MovieCard({ movie }) {
  const [hovered, setHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(movie.isFavorite);

  const handleSetFavourite = async (isFavourite) => {
    setIsFavorite(isFavourite);

    if (isFavourite) {
      await removeFavouriteMovie(movie);
      window.location.reload();
    } else {
      await addFavouriteMovie(movie);
      window.location.reload();
    }
  };

  return (
    <div
      key={movie.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative max-w-sm p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 group transition-all duration-500 delay-500  ${
        hovered ? "h-full" : "h-[360px]"
      }`}
    >
      <FallbackImage
        imageSrc={movie.poster}
        alt={movie.title}
        className="object-cover w-full h-64 rounded-lg"
      />
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-800 text-md dark:text-white">
            {movie.title}
          </h2>
          <FavouriteIcon
            isFavorite={isFavorite || false}
            toggleFavourite={handleSetFavourite}
          />
        </div>

        {/* Plot text container */}
        <p className="mt-2 text-gray-600 transition-opacity duration-500 delay-500 opacity-0 dark:text-gray-300 group-hover:opacity-100">
          {movie.plot}
        </p>
      </div>
    </div>
  );
}
