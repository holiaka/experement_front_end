import { Link, Outlet } from 'react-router-dom';
import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';

import { FaSun, FaMoon } from "react-icons/fa";

export const SharedLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('dark', 'white');

  return(
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about">About</Link>
        


        


      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <FaSun /> : <FaMoon />}
      </Button>
      <Button color={color} onClick={toggleColorMode}>
        {colorMode === 'light' ? <FaSun /> : <FaMoon />}
      </Button>  
      </header>      
      <Outlet />
      <footer>
        <p>Mobile: <a href='tel:+380974239084'>+38 (097) 423-90-84</a></p>
        <p>Email: <a href='malto:golyaka.d@gmail.com'>golyaka.d@gmail.com</a></p>
      </footer>
    </>
  );
};
