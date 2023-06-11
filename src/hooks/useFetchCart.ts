import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CartStore from '../store/CartStore';

export default function useFetchCart() {
  const store = container.resolve(CartStore);

  const [{ cart }] = useStore(store);

  useEffect(() => {
    store.fetchCart();
  }, []);

  return { cart };
}
