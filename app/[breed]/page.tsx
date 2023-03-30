import React from "react";
import FavoriteImage from "../components/FavoritImage";

interface Props {
  params: {
    breed: string;
  };
}

const BreedPage = async ({ params: { breed } }: Props) => {
  const { message: images } = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/30`
  ).then((res) => res.json() as Promise<{ message: string[] }>);
  return (
      <section
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}
        className="mt-5 grid gap-4"
      >
        {images.map((image) => (
          <FavoriteImage key={image} src={image} />
        ))}
      </section>
  );
};

export default BreedPage;
