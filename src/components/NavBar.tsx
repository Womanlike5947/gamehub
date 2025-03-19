import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
// #region Extra Info
{
  /**  HStack = Horizontal Stack*/
}
// #endregion

// #region Interface
interface INavBar {
  onSearch: (searchText: string) => void;
}
// #endregion

const NavBar = ({onSearch}: INavBar) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
