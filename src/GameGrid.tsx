import React, { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { Genre } from "./App";
import { Wrap, WrapItem, Text } from "@chakra-ui/react";
import GameCard, { Game } from "./main/components/GameCard";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {" "}
      {error && <Text>{error}</Text>}
      <Wrap>
        {games.map((game) => (
          <WrapItem key={game.id}>
            <GameCard game={game} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default GameGrid;
