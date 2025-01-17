"use server";

import data from "./data.json";

export async function getMovies() {
  return data.movies.map((movie) => {
    return {
      title: movie.Title,
      genre: movie.Genre,
      year: movie.year,
      poster: movie.poster || movie.images[0],
      imdbRating: movie.imdbRating,
      plot: movie.Plot,
    };
  });
}
