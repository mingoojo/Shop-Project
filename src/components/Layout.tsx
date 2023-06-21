import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './default/Header';
import Footer from './default/Footer';
import useCheckAccessToken from '../hooks/useCheckAccessToken';

const Container = styled.div`
/* border: 2px solid #222; */
max-width: 840px;
margin: auto;
`;

export default function Layout() {
  useCheckAccessToken();
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
