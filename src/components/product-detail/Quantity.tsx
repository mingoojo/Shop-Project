import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import Button from '../ui/Button';

const Container = styled.div`

`;

export default function Quantity() {
  const [{ quantity }, store] = useProductFormStore();

  const handleClickDec = () => {
    store.setQuantity(quantity - 1);
  };

  const handelClickInk = () => {
    store.setQuantity(quantity + 1);
  };

  return (
    <Container>
      <Button onClick={handleClickDec}>
        -
      </Button>
      <input type="input" readOnly value={quantity} />
      <Button onClick={handelClickInk}>
        +
      </Button>
    </Container>
  );
}
