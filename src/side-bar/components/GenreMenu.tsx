import React from "react";
import { ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Genre } from "../../App";

interface Props {
  genres: Genre[];
}
const GenreMenu = ({ genres }: Props) => {
  return (
    <UnorderedList>
      {genres.map((genre) => (
        <ListItem>
          <ListIcon as={AddIcon} color="green.500" />
          {genre.name}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default GenreMenu;
