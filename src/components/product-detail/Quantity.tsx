import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import Button from '../Ui/Button';

const Container = styled.div`
  margin-top: 1rem;
`;

export default function Quantity() {
  const [{ quantity }, store] = useProductFormStore();

  const handleClickDec = () => {
    store.changeQuantity(quantity - 1);
  };
  const handleClickInc = () => {
    store.changeQuantity(quantity + 1);
  };

  return (
    <Container>
      <Button onClick={handleClickDec}>
        -
      </Button>
      <input type="text" readOnly value={quantity} />
      <Button onClick={handleClickInc}>
        +
      </Button>
    </Container>
  );
}
