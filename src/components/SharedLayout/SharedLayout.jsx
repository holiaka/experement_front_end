import { Link, Outlet } from 'react-router-dom';
import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { Container, Header, Navigation, Side } from './SharedLayout.styled';

export const SharedLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('dark', 'white');

  return (
    <>
      <Container>
        <Header>
          <Navigation>
            <Side>
              <Link to="/">
                <BiSolidContact />
              </Link>
              <Link to="/about">About</Link>
            </Side>
            <Side>
              <Button color={color} onClick={toggleColorMode}>
            {colorMode === 'light' ? <FaSun /> : <FaMoon />}
              </Button>
              <Link to="/login">Log In</Link>
              <Link to="/registration">Registration</Link>
            </Side>
          </Navigation>

          
        </Header>
        <Outlet />
        <footer>
          <p>
            <LuPhoneCall />: <a href="tel:+380974239084">+38 (097) 423-90-84</a>
          </p>
          <p>
            <MdOutlineEmail />:
            <a href="malto:golyaka.d@gmail.com">golyaka.d@gmail.com</a>
          </p>
        </footer>
      </Container>
    </>
  );
};
