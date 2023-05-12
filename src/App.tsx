import { useState, useEffect } from "react";
import "./App.css";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import FilterBar from "./components/FilterBar";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";

function App() {
  const [searchString, setSearchString] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
            selectedGenre={selectedGenre}
            onGenreChange={(genre: Genre) => {
              return setSelectedGenre(genre);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <FilterBar
          orderByOptions={orderByOptions}
          platformOptions={[]}
          onOrderChange={(order) => {}}
          onPlatformChange={(platform) => {
            handlePlatformChange(platform);
          }}
        />
        <Text fontSize={40} m={2}>
          {selectedGenre?.name} Games
        </Text>
        <GameGrid genre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}
export default App;
