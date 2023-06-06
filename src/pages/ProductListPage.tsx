import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products-List/Products';
import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductListPage() {
  const [params] = useSearchParams();
  const categoryId = params.get('categoryId') ?? undefined;
  const { products } = useFetchProducts({ categoryId });
  return (
    <div>
      <Products products={products} />
    </div>
  );
}
