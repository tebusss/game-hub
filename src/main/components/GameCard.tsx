import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Genre } from "../../App";

export interface Game {
  id: number;
  name: string;
  description: string;
  background_image?: string;
  releaseDate?: Date;
  platform?: string;
  genre?: Genre;
}

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image src={game.background_image} alt="" borderRadius="1g" />
        <Stack mt={6} spacing={3}>
          <Heading size="md">{game.name}</Heading>
          <ArrowDownIcon />
          <Text>{game.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
