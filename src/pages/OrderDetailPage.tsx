import { useParams } from 'react-router-dom';
import Order from '../components/order/Order';
import useFetchOrder from '../hooks/useFetchOrder';

export default function OrderDetailPage() {
  const params = useParams();
  const { order, loading, error } = useFetchOrder({
    orderId: String(params.id),
  });

  if (loading) {
    return (
      <p>loading</p>
    );
  }

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  return (
    <Order order={order} />
  );
}
