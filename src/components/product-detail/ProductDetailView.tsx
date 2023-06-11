import styled from 'styled-components';
import useProductStore from '../../hooks/useProductStore';
import AddToCartForm from './AddToCartForm';
import Description from './Description';
import Images from './Images';

const Container = styled.div`
display: flex;
justify-content: space-between;
aside{
  width: 38%;
}
article{
  width: 60%;
}
`;

export default function ProductDetailView() {
  const [{ product }] = useProductStore();
  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        <AddToCartForm />
        <Description value={product.description} />
      </article>
    </Container>
  );
}
