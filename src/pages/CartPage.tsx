import CartView from '../components/cart/CartView';
import useFetchCart from '../hooks/useFetchCart';

export default function CartPage() {
  const { cart } = useFetchCart();

  return (
    <div>
      <h2>장바구니</h2>
      {
        cart === null ? (<p>장바구니가 비었습니다</p>) : (<CartView cart={cart} />)
      }
    </div>
  );
}
