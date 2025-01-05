import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

function App() {
  return (
    <Grid
      templateAreas={{
        /** Act as breakpoints. For more info look at: https://www.chakra-ui.com/docs/styling/responsive-design */
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // devices with a screen =< 1024px
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        {/* This shall only show when the screen is above lg */}
        <GridItem area='aside'>Aside</GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
