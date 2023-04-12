import React from "react";
import {
  Checkbox,
  HStack,
  useTheme,
  useBoolean,
  Button,
} from "@chakra-ui/react";

const ThemeToggle = () => {
  const theme = useTheme();
  const [flag, setFlag] = useBoolean();
  return (
    <HStack>
      <Button onClick={setFlag.toggle} />
      <p>{flag ? "Light mode" : "Dark mode"}</p>
    </HStack>
  );
};

export default ThemeToggle;
