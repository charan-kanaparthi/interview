"use client"; // Ensure this is a client component

import React, { useEffect } from "react";
import MovieCard from "./movie-card";

const MovieListCarousel = ({ movies }) => {
  // TODO: show more than 6 movies by scrolling
  useEffect(() => {
    // Initialize carousel if your library requires JavaScript initialization
    if (window.hs && window.hs.carousel) {
      window.hs.carousel.init();
    }
  }, []);

  const carouselConfig = {
    loadingClasses: "opacity-0",
    isAutoHeight: true,
    isAutoPlay: true,

    dotsItemClasses:
      "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
    slidesQty: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 6,
    },
  };

  return (
    <div className="relative">
      <div
        data-hs-carousel={JSON.stringify(carouselConfig)}
        className="relative"
      >
        <div className="relative w-full overflow-hidden rounded-lg hs-carousel">
          <div className="hs-carousel-body flex flex-nowrap overflow-hidden transition-[height,transform] duration-700 opacity-0">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="flex-none w-1/6 px-1 hs-carousel-slide"
              >
                <div className="flex justify-center h-full p-6 bg-gray-100 dark:bg-neutral-900">
                  <MovieCard movie={movie} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="absolute flex justify-center space-x-2 hs-carousel-pagination bottom-3 start-0 end-0"></div>
      </div>
    </div>
  );
};

export default MovieListCarousel;
