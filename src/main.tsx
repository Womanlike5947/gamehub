import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import theme from './theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/next';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
      <Analytics />
    </ChakraProvider>
  </React.StrictMode>,
);
