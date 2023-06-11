import { useEffect } from 'react';
import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import useProductStore from '../../hooks/useProductStore';

const Container = styled.div`
margin-top: 1rem;
`;

export default function Price() {
  const [{ product }] = useProductStore();
  const [{ price }, productFormStore] = useProductFormStore();

  // TODO: product 변경에 따른 setProduct 호출은 여기가 아니라 page 등에서 처리할 것!
  useEffect(() => {
    productFormStore.setProduct(product);
  }, [productFormStore, product]);
  return (
    <Container>
      {price.toLocaleString()}
      원
    </Container>
  );
}
