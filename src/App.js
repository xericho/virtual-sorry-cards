import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Home } from './components/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
