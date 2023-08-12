import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { FaSun, FaMoon } from '';

export const SharedLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('dark', 'white');

  render(
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <FaSun /> : <FaMoon />}
      </Button>
      <Button color={color} onClick={toggleColorMode}>
        {colorMode === 'light' ? <FaSun /> : <FaMoon />}
      </Button>
    </>
  );
};
