import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';





export const App = () => {  
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('white', 'gray.800');

  console.log(colorMode, toggleColorMode);

  return (
    <>
      <header>
        <button onClick={toggleColorMode}>My Button</button>
        <Button colorScheme="teal" onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Button bg={color} onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      </header>
      <main>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
      <footer></footer>
    </>
  );
}

