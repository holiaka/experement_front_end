import React from 'react';
import * as ReactDOM from 'react-dom/client';
// import { ColorModeScript } from '@chakra-ui/react';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from 'theme/theme';

import './index.css';
import { App } from './components/App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename="/experement_front_end">
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
