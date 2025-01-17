"use server";

import {
  getMovies as getImdb,
  toggleimdbIDFavoriteMovie,
} from "./providers/imdb";
import { getMovies as getRT, toggleRTFavoriteMovie } from "./providers/rt";

// HINT: these functions run on the server. console.log will output to the terminal.
let favoriteMovies = [];

export async function getRecentMovies() {
  // Recent movies only shows the top 5 movies from both providers.
  // so "Breaking bad" will not be shown in the recent movies. This is not a bug.
  const movies = [...(await getImdb()), ...(await getRT())];
  return movies.slice(0, 5);
}

export async function getGenereAndMovies() {
  // TODO: sort genres by the name. (Bug 2)

  const movies = [...(await getImdb()), ...(await getRT())];

  const genres = movies.reduce((acc, movie) => {
    const genres = movie.genre?.split(",").map((genre) => genre.trim());
    genres?.forEach((genre) => {
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push({ ...movie });
    });
    return acc;
  }, {});
  return Object.entries(genres)
    .sort((genrA, genrB) => genrA[0].localeCompare(genrB[0]))
    .map(([genre, movies]) => ({ title: genre, movies }));
}

export async function getFavouriteMovies() {
  return favoriteMovies;
}

export async function addFavouriteMovie(movie) {
  const index = favoriteMovies.find((fav) => fav.title === movie.title);
  if (index === -1) {
    favoriteMovies.push(movie);
    toogleFavourite(movie);
  }
}
export async function removeFavouriteMovie(movie) {
  favoriteMovies = favoriteMovies.filter((fav) => fav.title !== movie.title);
  toogleFavourite(movie);
}

export async function toogleFavourite(movie) {
  if (movie.providerName === "IMDB") {
    toggleimdbIDFavoriteMovie(movie.title);
  } else if (movie.providerName === "RT") {
    toggleRTFavoriteMovie(movie.title);
  }
}
