import styled from 'styled-components';
import { ProductSummary } from '../../types';

type ProductProps = {
  product : ProductSummary
}

const Container = styled.div`
  img{
    width: 100%;
  }
`;

export default function Product({ product }:ProductProps) {
  return (
    <Container>
      <img src={`${product.thumbnail.url}`} alt="thumnail" />
      <p>
        {product.name}
      </p>
      <p>
        {product.price}
      </p>
    </Container>
  );
}
