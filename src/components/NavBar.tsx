import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => (
  <HStack padding="10px">
    <Image src={logo} boxSize="60px" />
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
