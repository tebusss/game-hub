import React from "react";
import { Icon, Input, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface Props {
  onSearchStringChange: (str: string) => void;
}

const SearchBar = ({ onSearchStringChange }: Props) => {
  return (
    <>
      <HStack>
        <SearchIcon boxSize={5} />
        <Input
          placeholder="Search games..."
          onChange={(event) => onSearchStringChange(event.target.value)}
        />
      </HStack>
    </>
  );
};

export default SearchBar;
