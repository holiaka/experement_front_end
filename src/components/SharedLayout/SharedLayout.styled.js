import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
`;

export const Navigation = styled.div`

`;

export const Footer = styled.footer`
font-size: 18px;

padding: 40px;

display: flex;
justify-content: space-between;
gap: 200px;
`;

export const Side = styled.div`

`;

export const FooterInfo = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;
