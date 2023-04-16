import { Wrap, WrapItem, Text } from "@chakra-ui/react";
import GameCard from "./main/components/GameCard";
import useGames from "./hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
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
