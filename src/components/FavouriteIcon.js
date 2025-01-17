import React from "react";
import { Star } from "lucide-react";

const FavouriteIcon = ({ isFavorite, toggleFavourite }) => {
  const handleOnClick = () => {
    toggleFavourite(!isFavorite);
  };

  return (
    <>
      <Star
        onClick={handleOnClick}
        className={isFavorite ? "text-yellow-600" : ""}
      />
    </>
  );
};

export default FavouriteIcon;
