// fa means font awesome
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
// md means material design
import { MdPhoneIphone } from 'react-icons/md';
// Si means ???
import { SiNintendo } from 'react-icons/si';
// bs means bootstrap
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons';

interface IPlatformIconList {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: IPlatformIconList) => {
  // {[key:string]} - is called an index signature
  const iconMap: { [key: string]: IconType } = {
    // name: PlayStation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    apple: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    // slug: playstation (slug is another term for textual id)
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        // <Text key={platform.id}>{platform.name}</Text>
        <Icon as={iconMap[platform.slug]} color={'gray.500'} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
