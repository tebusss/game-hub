import React from "react";
import { Checkbox, HStack } from "@chakra-ui/react";

const ThemeToggle = () => {
  return (
    <HStack>
      <Checkbox />
      <p>Dark Mode</p>
    </HStack>
  );
};

export default ThemeToggle;
