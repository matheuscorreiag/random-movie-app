import { Movie, getMovie } from "@/src/actions/get-movie";
import { useQuery } from "@tanstack/react-query";

export function useMovie(genreIds: string, enabled = false) {
  return useQuery<Movie | null>({
    queryKey: ["movie"],
    queryFn: () => getMovie({ genreIds }),
    enabled,
  });
}
