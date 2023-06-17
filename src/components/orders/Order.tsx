import styled from 'styled-components';
import { OrderSummary } from '../../types';

type OrderPrpos = {
  order : OrderSummary
}

const Container = styled.div`
line-height: 1.5;
`;

export default function Order({ order }:OrderPrpos) {
  return (
    <Container>
      <div>
        주문 일시:
        {' '}
        {order.orderedAt}
      </div>
      <div>
        주문 코드:
        {' '}
        {order.id}
      </div>
      <div>
        상품:
        {' '}
        {order.title}
      </div>
      <div>
        결제 금액:
        {' '}
        {(order.totalPrice).toLocaleString()}
        원
      </div>
    </Container>
  );
}
