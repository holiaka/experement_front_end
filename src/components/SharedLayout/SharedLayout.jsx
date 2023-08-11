import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { render } from '@testing-library/react';

export const SharedLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue();

    render(

        <Button onClick={toggleColorMode}>
            
        </Button>
    );
}