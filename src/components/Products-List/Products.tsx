import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductSummary } from '../../types';
import Product from './Product';

type ProductsProps = {
  products : ProductSummary[]
}

const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li{
    width: 20%;
    padding: 1rem;
  }
  a{
    text-decoration: none;
    display: block;
  }
`;

export default function Products({ products }:ProductsProps) {
  return (
    <Container>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Product product={product} />
              </Link>
            </li>
          ))
        }
      </ul>
    </Container>
  );
}