"use server";

import data from "./data.json";

export async function getMovies() {
  return data.movies;
}
