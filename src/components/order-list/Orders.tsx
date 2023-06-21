import { Link } from 'react-router-dom';
import { OrderSummary } from '../../types';
import Order from './Order';

type OrdersProps = {
  orders : OrderSummary[]
}

export default function Orders({ orders }:OrdersProps) {
  if (!orders.length) {
    return null;
  }
  console.log(orders);

  return (
    <ul>
      {
        orders.map((order) => (
          <li key={order.id}>
            <Link to={`/orders/${order.id}`}>
              <Order order={order} />
            </Link>
          </li>
        ))
      }
    </ul>
  );
}
