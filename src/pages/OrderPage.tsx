import OrderForm from '../components/order/OrderForm';
import usefetchCart from '../hooks/usefetchCart';

export default function OrderPage() {
  const { cart } = usefetchCart();
  if (!cart) {
    return null;
  }

  return (
    <OrderForm cart={cart} />
  );
}
