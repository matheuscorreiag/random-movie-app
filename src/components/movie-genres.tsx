import { Button } from "./button";
import { useMovieGenre } from "@/hooks/useMovieGenres";
import { cn } from "@/utils";
import { router, useGlobalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

export function MovieGenres() {
  const { data: movies } = useMovieGenre();
  const params = useGlobalSearchParams<{
    genreIds: string;
  }>();

  function handleSetGenre(id: number) {
    const rawGenreIds = params.genreIds || "";
    const stringGenreIds = rawGenreIds ? rawGenreIds.split("_") : [];
    const genreIds = stringGenreIds.map((id) => parseInt(id, 10));

    if (genreIds.includes(id)) {
      const index = genreIds.indexOf(id);
      genreIds.splice(index, 1);
    } else {
      genreIds.push(id);
    }

    const formattedGenreIds = genreIds.join("_");

    router.setParams({ genreIds: formattedGenreIds });
  }
  return (
    <ScrollView className="gap-x-2  my-2" horizontal>
      {movies?.map((genre) => (
        <Button
          key={genre.id}
          label={genre.name}
          onPress={() => handleSetGenre(genre.id)}
          className={cn("h-12", {
            "bg-white ": !params.genreIds?.includes(genre.id.toString()),
          })}
          labelClassName={cn({
            "text-black": !params.genreIds?.includes(genre.id.toString()),
          })}
        />
      ))}
    </ScrollView>
  );
}
