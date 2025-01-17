import Image from "next/image";
import { useState } from "react";

const FallbackImage = ({ imageSrc, className, alt }) => {
  const fallbackImage = "/fallback.png";
  const [imgSrc, setImgSrc] = useState(imageSrc || fallbackImage);

  const handleImageError = (e) => {
    setImgSrc(fallbackImage);
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      width={300}
      height={450}
      onError={handleImageError}
    />
  );
};

export default FallbackImage;
