import { Link, Outlet } from 'react-router-dom';
import {
  useColorMode,
  useColorModeValue,
  Button,
  Text,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import {
  Container,
  Header,
  Navigation,
  Side,
  Footer,
  FooterInfo,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('dark', 'white');
  const linkColor = useColorModeValue('teal.700', 'teal.100');

  return (
    <>
      <Container>
        <Header>
          <Navigation>
            <Side>
              <Link color={linkColor} to="/">
                <BiSolidContact color={linkColor} />
              </Link>
              <Link color={linkColor} to="/about">About</Link>
            </Side>
            <Side>
              <Button color={color} onClick={toggleColorMode}>
                {colorMode === 'light' ? <FaSun /> : <FaMoon />}
              </Button>
              <Link color={linkColor} to="/login">Log In</Link>
              <Link color={linkColor} to="/registration">Registration</Link>
            </Side>
          </Navigation>
        </Header>
        <Outlet />
        <Footer>
          <div>
            <FooterInfo>
              <LuPhoneCall color={color} />: 
              <a href="tel:+380974239084"> +38 (097) 423-90-84</a>
            </FooterInfo>
            <FooterInfo>
              <MdOutlineEmail color={color} />: 
              <a href="malto:golyaka.d@gmail.com" color="gray">
                 
                golyaka.d@gmail.com
              </a>
            </FooterInfo>
          </div>
          <div>
            <Text color={color}>Created Dmytrii Holiaka</Text>
          </div>
        </Footer>
      </Container>
    </>
  );
};
