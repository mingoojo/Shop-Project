import styled from 'styled-components';
import { ProductSummary } from '../../types';

const Thumbnail = styled.img.attrs({
  alt: 'Thumbnail',
})`
width : 100%;
display: block;
aspect-ratio: 1/1;
`;

type ProductProps ={
  product : ProductSummary
}

export default function Product({ product }:ProductProps) {
  return (
    <div>
      <Thumbnail src={`${product.thumbnail.url}`} />
      <div>{product.name}</div>
      <div>
        {product.price.toLocaleString()}
        원
      </div>
    </div>
  );
}
