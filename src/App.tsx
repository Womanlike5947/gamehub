import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

// #region Interface
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
// #endregion

function App() {
  // #region State
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // #endregion

  return (
    <Grid
      templateAreas={{
        /** Act as breakpoints. For more info look at: https://www.chakra-ui.com/docs/styling/responsive-design */
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // devices with a screen =< 1024px
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above="lg">
        {/* This shall only show when the screen is above lg */}
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectedSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
