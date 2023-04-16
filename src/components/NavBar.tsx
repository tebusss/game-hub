import { Input, HStack, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.webp";
import ThemeToggle from "./ThemeToggle";

interface Props {
  onSearchStringChange: (str: string) => void;
}

const NavBar = ({ onSearchStringChange }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchIcon boxSize={5} />
      <Input
        placeholder="Search games..."
        onChange={(event) => onSearchStringChange(event.target.value)}
      />
      <ThemeToggle />
    </HStack>
  );
};

export default NavBar;
