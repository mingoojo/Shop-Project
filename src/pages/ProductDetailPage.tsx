import { useParams } from 'react-router-dom';
import useFetchProduct from '../hooks/useFetchProduct';
import ProductDetailView from '../components/product-detail/ProductDetailView';

export default function ProductDetailPage() {
  const params = useParams();
  const { error, loading } = useFetchProduct({ productId: String(params.id) });
  if (loading) {
    return (
      <p>loading</p>
    );
  }
  if (error) {
    return (
      <p>error!</p>
    );
  }
  return (
    <div>
      <ProductDetailView />
    </div>
  );
}
