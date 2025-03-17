import { Box } from '@chakra-ui/react';
import { Children, ReactNode } from 'react';

// #region Interface
interface IGameCardContainer {
  children: ReactNode;
}
// #endregion

const GameCardContainer = ({ children }: IGameCardContainer) => {
  return (
    <Box width={300} borderRadius={10} overflow={'hidden'}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
