import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChakraProvider, HStack, VStack } from "@chakra-ui/react";
import SearchBar from "./main-menu/components/SearchBar";
import ThemeToggle from "./main-menu/components/ThemeToggle";
import GenreMenu from "./side-bar/components/GenreMenu";

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
  return (
    <ChakraProvider>
      <VStack>
        <GenreMenu genres={genres} />
      </VStack>
      <HStack>
        <SearchBar />
        <ThemeToggle />
      </HStack>
    </ChakraProvider>
  );
}

export default App;
