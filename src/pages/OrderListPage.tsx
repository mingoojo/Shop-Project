import Orders from '../components/orders/Orders';
import useFetchOrders from '../hooks/useFetchOrders';

export default function OrderListPage() {
  const { orders } = useFetchOrders();
  return (
    <div>
      <h2>주문목록</h2>
      <Orders orders={orders} />
    </div>
  );
}
