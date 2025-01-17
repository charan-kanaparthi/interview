"use server";

import { getMovies as getImdb } from "./providers/imdb";
import { getMovies as getRT } from "./providers/rt";

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
  const favoriteMovies = await getFavouriteMovies();

  const genres = movies.reduce((acc, movie) => {
    const genres = movie.genre?.split(",").map((genre) => genre.trim());
    genres?.forEach((genre) => {
      if (!acc[genre]) {
        acc[genre] = [];
      }
      const isFavorite = favoriteMovies.some((fav) => fav.id === movie.id);
      acc[genre].push({ ...movie, isFavorite });
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
  favoriteMovies.push(movie);
}
export async function removeFavouriteMovie(movie) {
  favoriteMovies = favoriteMovies.filter((fav) => fav.id !== movie.id);
}
