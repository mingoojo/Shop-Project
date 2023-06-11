import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductStore from '../store/ProductStore';

export default function useProductStore() {
  const store = container.resolve(ProductStore);
  return useStore(store);
}
