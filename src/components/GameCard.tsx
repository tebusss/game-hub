import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt="" borderRadius="1g" />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <ArrowDownIcon />
        <Text>{game.description}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
