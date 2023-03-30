"use client";

import { useFavorites } from "../../state/favorite";

const FavoriteImage = ({ src }: { src: string }) => {
    const favorites = useFavorites((state) => state.favorites)
    const toggleFavorite = useFavorites((state) => state.toggleFavorite)
  const isFavorite = favorites.includes(src);

  return (
    <div className="relative">
      <img className="w-full h-64 object-cover" src={src} />
      <button
        className={`absolute text-2xl w-8 h-8 bottom-4 right-4 bg-white rounded-2xl  ${
          isFavorite ? "text-yellow-500" : "text-black"
        } `}
        onClick={() => toggleFavorite(src)}
      >  
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
};

export default FavoriteImage;
