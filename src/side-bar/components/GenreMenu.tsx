import React from "react";
import { ListItem, ListIcon, List, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Genre } from "../../App";

interface Props {
  genres: Genre[];
  onGenreChange: (genre: number) => void;
}
const GenreMenu = ({ genres, onGenreChange }: Props) => {
  return (
    <>
      <Button margin={5} onClick={() => onGenreChange(-1)}>
        Clear
      </Button>
      <List spacing={3}>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <ListIcon as={AddIcon} color="green.500" />
            <Button onClick={() => onGenreChange(genre.id)}>
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreMenu;
