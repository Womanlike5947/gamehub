import { Button } from '@chakra-ui/react';

function App() {
  return (
    <div style={{ height: '100vh', padding: '1vw' }}>
      <Button
        colorScheme='blue'
        size={'lg'}
        style={{ padding: '2vw', backgroundColor: 'red', color: 'white' }}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
