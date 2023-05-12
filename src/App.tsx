import { useState, useEffect } from "react";
import "./App.css";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [searchString, setSearchString] = useState("");
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [orderByOptions, setOrderByOptions] = useState([
    "Popularity",
    "Release date",
    "Name",
  ]);
  useEffect(() => {
    handlePlatformChange("All");
  }, []);
  const handlePlatformChange = (selectedPlat: string) => {
    console.log(selectedPlat);
  };
  const handleSearchStringChange = (searchString: string) => {
    console.log(searchString);
    setSearchString(searchString.toLowerCase());
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap={2}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearchStringChange={(str: string) => handleSearchStringChange(str)}
        />
      </GridItem>
      <Show above="lg">
        <GridItem pl={2} area={"aside"} paddingX={1}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onGenreChange={(genre: Genre) => {
              return setGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <Text fontSize={40} m={2}>
          {gameQuery.genre?.name} Games
        </Text>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
