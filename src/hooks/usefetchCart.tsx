import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { useEffectOnce } from 'usehooks-ts';
import CartStore from '../store/CartStore';

export default function usefetchCart() {
  const store = container.resolve(CartStore);
  const [{ cart }] = useStore(store);

  useEffectOnce(() => {
    store.fetchCart();
  });

  return {
    cart,
  };
}
