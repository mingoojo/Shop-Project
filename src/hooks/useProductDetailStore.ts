import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductDetailStore from '../store/ProductDetailStore';

export default function useProductDetailStore() {
  const store = container.resolve(ProductDetailStore);
  return useStore(store);
}
