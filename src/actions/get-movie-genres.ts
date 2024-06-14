"use server";

import { env } from "@/src/env/env";

export type Genres = {
  id: number;
  name: string;
};
type MovieGenresResponse = {
  genres: Genres[];
};
export async function getMovieGenres(): Promise<Genres[]> {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env.EXPO_PUBLIC_ACCESS_TOKEN_AUTH}`,
    },
  };

  const response = await fetch(url, options);

  const data = response.json() as Promise<MovieGenresResponse>;

  return (await data).genres;
}
