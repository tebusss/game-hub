import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  HStack,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import SearchBar from "./main-menu/components/SearchBar";
import ThemeToggle from "./main-menu/components/ThemeToggle";
import GenreMenu from "./side-bar/components/GenreMenu";
import GameCard from "./main/components/GameCard";
import FilterBar from "./main/components/FilterBar";

export interface Genre {
  id: number;
  name: string;
  img?: ImageBitmap;
}
export interface Game {
  id: number;
  name: string;
  imgPath?: string;
  releaseDate?: Date;
  platform: string;
}
function App() {
  const [games, setGames] = useState<Game[]>([
    {
      id: 1,
      name: "Game 1",
      releaseDate: new Date(2022, 3, 23),
      platform: "PS3",
    },
    {
      id: 2,
      name: "Game 2",
      releaseDate: new Date(2023, 3, 23),
      platform: "PS4",
    },
    {
      id: 3,
      name: "Game 3",
      releaseDate: new Date(2021, 3, 23),
      platform: "PS5",
    },
    {
      id: 4,
      name: "Game 4",
      releaseDate: new Date(2020, 3, 23),
      platform: "PC",
    },
    {
      id: 5,
      name: "Game 5",
      releaseDate: new Date(2019, 3, 23),
      platform: "PC",
    },
    {
      id: 6,
      name: "Game 6",
      releaseDate: new Date(2018, 3, 23),
      platform: "Xbox",
    },
  ]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [genres, setGenres] = useState<Genre[]>([
    { id: 1, name: "Action" },
    { id: 2, name: "Indie" },
    { id: 3, name: "Adventure" },
  ]);
  const [orderByOptions, setOrderByOptions] = useState([
    "Popularity",
    "Release date",
    "Name",
  ]);
  const [platformOptions, setPlatformOptions] = useState([
    "Xbox",
    "PS3",
    "PS4",
    "PC",
    "PS5",
  ]);
  const handleFilterChange = () => {
    var filtered = games.filter((g) => g.platform === selectedPlatform);
    setFilteredGames(filtered);
  };
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
      "nav main"
      "nav footer"`}
        gridTemplateRows={"50px 1fr 50px"}
        templateColumns={"150px 1fr"}
        gap={2}
      >
        <GridItem pl={2} area={"header"}>
          <HStack>
            <SearchBar />
            <ThemeToggle />
          </HStack>
        </GridItem>
        <GridItem pl={2} area={"nav"}>
          <GenreMenu genres={genres} />
        </GridItem>
        <GridItem pl={2} area={"main"}>
          <FilterBar
            orderByOptions={orderByOptions}
            platformOptions={platformOptions}
            onOrderChange={(order) => {
              setSelectedOrder(order);
              handleFilterChange();
            }}
            onPlatformChange={(platform) => {
              setSelectedPlatform(platform);
              handleFilterChange();
            }}
          />
          <Wrap>
            {filteredGames.map((game) => (
              <WrapItem>
                <GameCard game={game} />
              </WrapItem>
            ))}
          </Wrap>
        </GridItem>
        <GridItem pl={2} area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
