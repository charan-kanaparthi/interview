"use server";

import data from "./data.json";

export async function getMovies() {
  return data.movies.map((movie) => {
    return {
      ...movie,
      providerName: "IMDB",
    };
  });
}

export async function toggleimdbIDFavoriteMovie(title) {
  data.movies.forEach((item) => {
    if (item.title === title || item.Title === title) {
      item.isFavorite = !item.isFavorite;
    }
  });
}
