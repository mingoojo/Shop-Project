import styled from 'styled-components';
import CartView from '../components/Cart/CartView';
import useFetchCart from '../hooks/useFetchCart';

const Container = styled.div`
max-width: 1080px;
`;

export default function CartPage() {
  const { cart } = useFetchCart();
  return (
    <Container>
      <h2>장바구니</h2>
      <CartView cart={cart} />
    </Container>
  );
}
