import { Genres, getMovieGenres } from "@/src/actions/get-movie-genres";
import { useQuery } from "@tanstack/react-query";

export function useMovieGenre() {
  return useQuery<Genres[]>({
    queryKey: ["movie-genres"],
    queryFn: getMovieGenres,
  });
}
