import CartView from '../components/cart/CartView';
import usefetchCart from '../hooks/usefetchCart';

export default function CartPage() {
  const { cart } = usefetchCart();
  if (!cart) {
    return null;
  }

  return (
    <div>
      <h2>장바구니</h2>
      <CartView cart={cart} />
    </div>
  );
}
