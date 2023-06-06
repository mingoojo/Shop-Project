import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductsStore from '../stores/ProductsStore';
import { ProductSummary } from '../types';

export default function useFetchProducts({ categoryId }:{
  categoryId? : string
}):{products : ProductSummary[]} {
  const store = container.resolve(ProductsStore);
  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts({ categoryId });
  }, [store, categoryId]);

  return {
    products,
  };
}
