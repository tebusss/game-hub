import { ListItem, ListIcon, List, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  onGenreChange: (genre: number) => void;
}
const GenreMenu = ({ onGenreChange }: Props) => {
  const { data } = useGenres();
  return (
    <>
      <Button margin={5} onClick={() => onGenreChange(-1)}>
        Clear
      </Button>
      <List spacing={3}>
        {data.map((d) => (
          <ListItem key={d.id}>
            <ListIcon color="green.500" />
            <Button onClick={() => onGenreChange(d.id)}>{d.name}</Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreMenu;
