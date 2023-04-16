import { useState, useEffect } from "react";
import "./App.css";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreMenu from "./components/GenreList";
import FilterBar from "./components/FilterBar";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";

function App() {
  const [searchString, setSearchString] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
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
  const handleGenreChange = (selectedGenre: number) => {};
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
        lg: "250px 1fr",
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
          <GenreMenu
            onGenreChange={(genreId: number) => handleGenreChange(genreId)}
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
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
