"use client";

import "./global.css";
import { Nunito } from "next/font/google";
import Link from "next/link";
import FavoriteImage from "./components/FavoritImage";
import { useFavorites } from "../state/favorite";


const nunito = Nunito({ subsets: ["latin"] });
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const favorites = useFavorites((state) => state.favorites);
  
  return (
    <html lang="en" className={nunito.className}>
      <body className="max-w-screen-md m-auto p-4 ">
        <main>
          <div>
            <Link href="/">
              <h1 className="font-bold text-2xl uppercase">Dog breeds</h1>
            </Link>
            <nav>
              <ul className="flex flex-row gap-5 mt-3">
                <li>
                  <Link href="/affenpinscher">affenpinscher</Link>
                </li>
                <li>
                  <Link href="/african">african</Link>
                </li>
                <li>
                  <Link href="/airedale">airedale</Link>
                </li>
                <li>
                  <Link href="/akita">akita</Link>
                </li>
                <li>
                  <Link href="/beagle">beagle</Link>
                </li>
                <li>
                  <Link href="/airedboxerale">boxer</Link>
                </li>
                <li>
                  <Link href="/bulldog">bulldog</Link>
                </li>
                <li>
                  <Link href="/chihuahua">chihuahua</Link>
                </li>
                <li>
                  <Link href="/dachshund">dachshund</Link>
                </li>
              </ul>
            </nav>
          </div>
        </main>
        <article className="mb-10">{children}</article>
        <hr />
        <article className="mt-3">
          <h1 className="font-bold text-2xl uppercase mb-5">Favorites</h1>
          {favorites.length > 0 ? (
            <section
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
              }}
              className="mt-5 grid gap-4"
            >
              {favorites.map((image) => (
                <FavoriteImage key={image} src={image} />
              ))}
            </section>
          ) : (
            <p className="text-gray-500">You have not favorites yet.</p>
          )}
        </article>
      </body>
    </html>
  );
}