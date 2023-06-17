import styled from 'styled-components';
import { OrderDetail } from '../../types';
import Table from './Table';

type OrderProps = {
  order : OrderDetail
}

const Container = styled.div`
dl {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.7;

    dt {
      width: 8rem;
    }

    dd {
      width: calc(100% - 8rem);
    }
  }
`;

export default function Order({ order }:OrderProps) {
  console.log(order.lineItems);

  if (!order.lineItems.length) {
    return null;
  }

  return (
    <Container>
      <Table
        lineItems={order.lineItems}
        totalPrice={order.totalPrice}
      />
    </Container>
  );
}
