import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useAccessToken from '../../hooks/useAccessToken';
import Options from './Options';
import Price from './Price';
import Quantity from './Quantity';
import SubmitButton from './SubmitButton';

const Container = styled.div``;

export default function AddToCartForm() {
  const { accessToken } = useAccessToken();
  if (!accessToken) {
    return (
      <Container>
        주문하려면
        {' '}
        <Link to="/login">로그인</Link>
        하세요
      </Container>
    );
  }

  return (
    <div>
      <Quantity />
      <Price />
      <Options />
      <SubmitButton />
    </div>
  );
}
