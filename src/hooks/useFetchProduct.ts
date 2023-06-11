import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductStore from '../store/ProductStore';

export default function useFetchProduct({ productId }:{productId:string}) {
  const store = container.resolve(ProductStore);
  const [{ error, loading }] = useStore(store);

  useEffect(() => {
    store.fetchProduct({ productId });
  }, [productId]);

  return { error, loading };
}
