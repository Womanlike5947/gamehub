import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

// #region Interface
interface IPlatformSelector {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}
// #endregion

const PlatformSelector = ({
  selectedPlatform,
  onSelectPlatform,
}: IPlatformSelector) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ?? 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
