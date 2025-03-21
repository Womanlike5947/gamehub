import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

// #region Interface
interface GameHeadingProp {
  gameQuery: GameQuery;
}
// #endregion

const GameHeading = ({ gameQuery }: GameHeadingProp) => {
  const heading: string = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
