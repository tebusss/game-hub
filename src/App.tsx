import { useState, useEffect } from "react";
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
  genre: Genre;
}
function App() {
  const [genres, setGenres] = useState<Genre[]>([
    { id: 1, name: "Action" },
    { id: 2, name: "Indie" },
    { id: 3, name: "Adventure" },
  ]);
  const [games, setGames] = useState<Game[]>([
    {
      id: 1,
      name: "A Game 1",
      releaseDate: new Date(2022, 3, 23),
      platform: "PS3",
      genre: genres.find((x) => x.id === 1) as Genre,
    },
    {
      id: 2,
      name: "C Game 2",
      releaseDate: new Date(2023, 3, 23),
      platform: "PS4",
      genre: genres.find((x) => x.id === 1) as Genre,
    },
    {
      id: 3,
      name: "Ö Game 3",
      releaseDate: new Date(2021, 3, 23),
      platform: "PS5",
      genre: genres.find((x) => x.id === 1) as Genre,
    },
    {
      id: 4,
      name: "The Game 4",
      releaseDate: new Date(2020, 3, 23),
      platform: "PC",
      genre: genres.find((x) => x.id === 2) as Genre,
    },
    {
      id: 5,
      name: "A Game 5",
      releaseDate: new Date(2019, 3, 23),
      platform: "PC",
      genre: genres.find((x) => x.id === 2) as Genre,
    },
    {
      id: 6,
      name: "G Game 6",
      releaseDate: new Date(2018, 2, 23),
      platform: "Xbox",
      genre: genres.find((x) => x.id === 2) as Genre,
    },
    {
      id: 7,
      name: "Game 7",
      releaseDate: new Date(2022, 3, 15),
      platform: "PS3",
      genre: genres.find((x) => x.id === 2) as Genre,
    },
    {
      id: 8,
      name: "Game 8",
      releaseDate: new Date(2023, 3, 13),
      platform: "PS4",
      genre: genres.find((x) => x.id === 3) as Genre,
    },
    {
      id: 9,
      name: "Game 9",
      releaseDate: new Date(2000, 5, 23),
      platform: "PS4",
      genre: genres.find((x) => x.id === 3) as Genre,
    },
    {
      id: 10,
      name: "Game 10",
      releaseDate: new Date(2001, 3, 23),
      platform: "PS4",
      genre: genres.find((x) => x.id === 3) as Genre,
    },
    {
      id: 11,
      name: "Game 11",
      releaseDate: new Date(2002, 3, 23),
      platform: "PC",
      genre: genres.find((x) => x.id === 3) as Genre,
    },
    {
      id: 12,
      name: "Game 12",
      releaseDate: new Date(2003, 3, 23),
      platform: "Xbox",
      genre: genres.find((x) => x.id === 3) as Genre,
    },
  ]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
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
    filter(selectedGenre as Genre, selectedPlat);
    setSelectedPlatform(selectedPlat);
  };
  const handleGenreChange = (selectedGenre: number) => {
    const genre = genres.find((g) => g.id === selectedGenre) as Genre;
    console.log(genre);
    if (!genre) console.log("Genre filter cleared!");
    filter(genre, selectedPlatform);
    setSelectedGenre(genre);
  };
  const filter = (selectedGenre: Genre, selectedPlatform: string) => {
    var filtered = games;
    if (selectedPlatform !== "All")
      filtered = games.filter((g) => g.platform === selectedPlatform);
    if (selectedGenre) {
      filtered = filtered.filter((g) => g.genre === selectedGenre);
    }
    setFilteredGames(filtered);
  };
  const orderGames = (selectedOrder: string) => {
    console.log(selectedOrder);
    let temp = null;
    switch (selectedOrder) {
      case "Popularity": {
      }
      case "Release date": {
        temp = [...filteredGames].sort((a, b) => {
          if (a.releaseDate && b.releaseDate)
            return a.releaseDate > b.releaseDate ? -1 : 1;
          else return 0;
        });
        break;
      }
      case "Name":
        temp = [...filteredGames].sort((a, b) => a.name.localeCompare(b.name));
        console.log("by name");
        break;
    }
    if (temp) setFilteredGames(temp);
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
          <GenreMenu
            genres={genres}
            onGenreChange={(genreId: number) => handleGenreChange(genreId)}
          />
        </GridItem>
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
          <Wrap>
            {filteredGames.map((game) => (
              <WrapItem key={game.id}>
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
