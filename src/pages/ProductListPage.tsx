import { useSearchParams } from 'react-router-dom';
import Products from '../components/products-list/Products';
import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductListPage() {
  const [params] = useSearchParams();
  const categoryId = params.get('categoryId') ?? '';

  const { products } = useFetchProducts({ categoryId });
  return (
    <div>
      <h2>Products</h2>
      <Products products={products} />
    </div>
  );
}
