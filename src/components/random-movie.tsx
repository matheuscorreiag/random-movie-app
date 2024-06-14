import { Movie } from "@/src/actions/get-movie";
import { Image, ScrollView, Text } from "react-native";

type RandomMovieProps = {
  movie: Movie | null;
};
export function RandomMovie({ movie }: RandomMovieProps) {
  return (
    movie && (
      <>
        <Image
          alt="movie poster"
          src={"http://image.tmdb.org/t/p/w500" + movie?.poster_path}
          width={400}
          height={200}
          className="w-full max-h-[200px] min-h-[200px] object-contain rounded-lg mt-12 mb-6"
        />

        <Text className="text-white font-bold">
          {movie && movie?.title + " - " + movie?.release_date.split("-")[0]}
        </Text>
        <ScrollView className="mt-12 mb-16 h-[150px]">
          <Text className="text-white ">{movie?.overview}</Text>
        </ScrollView>
      </>
    )
  );
}
