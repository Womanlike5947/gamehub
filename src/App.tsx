import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

// #region Interface
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        <NavBar />
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
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
