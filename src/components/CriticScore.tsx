import { Badge } from '@chakra-ui/react';

interface ICriticScore {
  score: number;
}

const CriticScore = ({ score }: ICriticScore) => {
  let colour = score > 75 ? 'green' : score > 601 ? 'yellow' : '';
  return (
    // colourScheme sets the entire colour theme instead of just color or backgroundColor
    <Badge colorScheme={colour} fontSize='14px' paddingX={2} borderRadius='4px'>
      {score}
    </Badge>
  );
};

export default CriticScore;
