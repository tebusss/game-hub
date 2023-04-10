import React from "react";
import { Icon, Input, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <>
      <HStack>
        <SearchIcon boxSize={5} />
        <Input placeholder="Search games..." />
      </HStack>
    </>
  );
};

export default SearchBar;
