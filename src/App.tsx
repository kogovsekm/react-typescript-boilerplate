import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import logo from './logo.svg';
import './App.scss';

function App (): JSX.Element {
  return (
    <div className="App">
      <RecoilRoot>
        <ChakraProvider>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>React - Typescript boilerplate</p>
          </header>
        </ChakraProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
