import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    // <div style={{ height: '100vh', padding: '1vw' }}>
    //   <Button
    //     colorScheme='blue'
    //     size={'lg'}
    //     style={{ padding: '2vw', color: 'blue' }}
    //   >
    //     Got to 5 - Creating a Responsive Layout (00:29)
    //   </Button>
    // </div>
    <Grid
      templateAreas={{
        /** Act as breakpoints. For more info look at: https://www.chakra-ui.com/docs/styling/responsive-design */
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // devices with a screen =< 1024px
      }}
    >
      <GridItem area='nav' bg='coral'>
        Nav
      </GridItem>
      <Show above='lg'>
        {/* This shall only show when the screen is above lg */}
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
