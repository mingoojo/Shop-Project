import Options from './Options';
import Price from './Price';
import Quantity from './Quantity';
import SubmitButton from './SubmitButton';

export default function AddToCartForm() {
  return (
    <div>
      <Quantity />
      <Options />
      <Price />
      <SubmitButton />
    </div>
  );
}
