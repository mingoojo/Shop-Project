import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OrderSummary } from '../../types';
import Order from './Order';

type OrdersProps = {
  orders:OrderSummary[]
}

const Contaier = styled.div`
  li {
    margin-block: .5rem;
    padding: 1rem;
    background: #EEE;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

export default function Orders({ orders }:OrdersProps) {
  if (!orders.length) {
    return (
      null
    );
  }

  return (
    <Contaier>
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
    </Contaier>
  );
}
