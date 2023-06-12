import {
  ListItem,
  List,
  Button,
  HStack,
  Image,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../image-url";

interface Props {
  onGenreChange: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onGenreChange, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={5}>
        Genres
      </Heading>
      <List spacing={3}>
        {data.map((d) => (
          <ListItem key={d.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                src={getCroppedImageUrl(d.image_background)}
                objectFit={"cover"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={selectedGenre?.id == d.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onGenreChange(d)}
              >
                {d.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
