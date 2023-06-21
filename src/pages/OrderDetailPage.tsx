import { useParams } from 'react-router-dom';
import useFetchOrder from '../hooks/useFetchOrder';
import Order from '../components/order-detail/Order';

export default function OrderDetailPage() {
  const params = useParams();
  const { order, loading, error } = useFetchOrder({ orderId: String(params.id) });
  if (loading) {
    return (
      <p>loading...</p>
    );
  }
  if (error) {
    return (
      <p>error!</p>
    );
  }
  return (
    <Order order={order} />
  );
}
