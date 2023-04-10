import React from "react";
import { ListItem, ListIcon, List } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Genre } from "../../App";

interface Props {
  genres: Genre[];
}
const GenreMenu = ({ genres }: Props) => {
  return (
    <List spacing={3}>
      {genres.map((genre) => (
        <ListItem>
          <ListIcon as={AddIcon} color="green.500" />
          {genre.name}
        </ListItem>
      ))}
    </List>
  );
};

export default GenreMenu;
