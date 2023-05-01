import {
  ListItem,
  List,
  Button,
  HStack,
  Image,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../image-url";

interface Props {
  onGenreChange: (genre: number) => void;
}
const GenreMenu = ({ onGenreChange }: Props) => {
  const { data, isLoading, error } = useGenres();
  //if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Button margin={5} onClick={() => onGenreChange(-1)}>
        Clear
      </Button>
      <List spacing={3}>
        {data.map((d) => (
          <ListItem key={d.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                src={getCroppedImageUrl(d.image_background)}
              />
              <Button fontSize="lg" onClick={() => onGenreChange(d.id)}>
                {d.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreMenu;
