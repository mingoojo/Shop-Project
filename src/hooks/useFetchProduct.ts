import { useEffect } from 'react';
import ProductDetailStore from '../store/ProductDetailStore';
import useProductDetailStore from './useProductDetailStore';
import useProductFormStore from './useProductFormStore';

export default function useFetchProduct({ productId }:{productId:string}) {
  const [{ product, error, loading }, store] = useProductDetailStore();
  const [, productFormStore] = useProductFormStore();

  useEffect(() => {
    store.fetchProduct({ productId });
  }, [productId, ProductDetailStore]);

  useEffect(() => {
    productFormStore.setProduct(product);
  }, [product, productFormStore]);

  return { error, loading };
}
