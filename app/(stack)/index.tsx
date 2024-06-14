import { useMovie } from "@/hooks/useMovie";
import { Button } from "@/src/components/button";
import { MovieGenres } from "@/src/components/movie-genres";
import { RandomMovie } from "@/src/components/random-movie";
import { useGlobalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const params = useGlobalSearchParams<{
    genreIds: string;
  }>();

  const [generate, setGenerate] = useState(false);
  const { data: randomMovie, refetch } = useMovie(
    params.genreIds || "",
    generate
  );

  function handleGenerate() {
    if (generate) {
      return refetch();
    }

    setGenerate(true);
  }

  return (
    <SafeAreaView>
      <View className="bg-zinc-900 w-full h-full flex flex-col py-12">
        <View className=" flex gap-4 h-full px-4">
          <View>
            <Text className="text-zinc-300 font-bold text-sm">
              Select the movie genres you would like to watch...
            </Text>
          </View>
          <View>
            <MovieGenres />
            <Text className="text-xs underline text-zinc-300 transition-all cursor-pointer">
              Aditional filters
            </Text>
          </View>

          <View>
            <RandomMovie movie={randomMovie || null} />
          </View>

          <View className="align-baseline justify-end">
            <Button label="Generate" onPress={handleGenerate} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
