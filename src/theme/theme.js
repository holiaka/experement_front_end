// Import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import Button from './components/Button';
import styles from './styles/global';


// Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const components = {
  Button,
};

// Extend the theme
const theme = extendTheme({ config, components, styles });

export default theme;
