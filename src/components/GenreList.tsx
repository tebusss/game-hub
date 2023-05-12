import {
  ListItem,
  List,
  Button,
  HStack,
  Image,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../image-url";

interface Props {
  onGenreChange: (genre: Genre) => void;
}
const GenreList = ({ onGenreChange }: Props) => {
  const { data, isLoading, error } = useGenres();
  //if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List spacing={3}>
        {data.map((d) => (
          <ListItem key={d.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                src={getCroppedImageUrl(d.image_background)}
              />
              <Button
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
