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
      providerName: "RT",
    };
  });
}

export async function toggleRTFavoriteMovie(title) {
  data.movies.forEach((item) => {
    if (item.title === title || item.Title === title) {
      item.isFavorite = !item.isFavorite;
    }
  });
}
