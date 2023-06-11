import { useParams } from 'react-router-dom';
import ProductDetailView from '../components/product-detail/ProductDetailView';
import useFetchProduct from '../hooks/useFetchProduct';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id ?? '';
  const { loading, error } = useFetchProduct({ productId });
  if (loading) {
    return (
      <p>loading</p>
    );
  }
  if (error) {
    return (
      <p>error</p>
    );
  }
  return (
    <ProductDetailView />
  );
}
