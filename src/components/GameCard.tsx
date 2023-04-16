import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt="" borderRadius="1g" />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <ArrowDownIcon />
        <Text>{game.description}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
