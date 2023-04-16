import { useState, useEffect } from "react";
import "./App.css";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreMenu from "./components/GenreList";
import FilterBar from "./components/FilterBar";
import GameGrid from "./components/GameGrid";

export interface Genre {
  id: number;
  name: string;
  img?: ImageBitmap;
}
function App() {
  const [genres, setGenres] = useState<Genre[]>([
    { id: 1, name: "Action" },
    { id: 2, name: "Indie" },
    { id: 3, name: "Adventure" },
  ]);
  const [searchString, setSearchString] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const [orderByOptions, setOrderByOptions] = useState([
    "Popularity",
    "Release date",
    "Name",
  ]);
  const [platformOptions, setPlatformOptions] = useState([
    "All",
    "Xbox",
    "PS3",
    "PS4",
    "PC",
    "PS5",
  ]);
  useEffect(() => {
    handlePlatformChange("All");
  }, []);
  const handlePlatformChange = (selectedPlat: string) => {
    console.log(selectedPlat);
    setSelectedPlatform(selectedPlat);
  };
  const handleGenreChange = (selectedGenre: number) => {
    const genre = genres.find((g) => g.id === selectedGenre) as Genre;
    console.log(genre);
    if (!genre) console.log("Genre filter cleared!");
    setSelectedGenre(genre);
  };
  const handleSearchStringChange = (searchString: string) => {
    console.log(searchString);
    setSearchString(searchString.toLowerCase());
  };

  const orderGames = (selectedOrder: string) => {
    console.log(selectedOrder);
    let temp = null;
    // switch (selectedOrder) {
    //   case "Popularity": {
    //   }
    //   case "Release date": {
    //     temp = [...filteredGames].sort((a, b) => {
    //       if (a.releaseDate && b.releaseDate)
    //         return a.releaseDate > b.releaseDate ? -1 : 1;
    //       else return 0;
    //     });
    //     break;
    //   }
    //   case "Name":
    //     temp = [...filteredGames].sort((a, b) => a.name.localeCompare(b.name));
    //     console.log("by name");
    //     break;
    // }
    // if (temp) setFilteredGames(temp);
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      gap={2}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearchStringChange={(str: string) => handleSearchStringChange(str)}
        />
      </GridItem>
      <Show above="lg">
        <GridItem pl={2} area={"aside"}>
          <GenreMenu
            genres={genres}
            onGenreChange={(genreId: number) => handleGenreChange(genreId)}
          />
        </GridItem>
      </Show>
      <GridItem pl={2} area={"main"}>
        <FilterBar
          orderByOptions={orderByOptions}
          platformOptions={platformOptions}
          onOrderChange={(order) => {
            orderGames(order);
          }}
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
