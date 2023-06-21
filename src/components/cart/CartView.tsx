import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../types';
import LineItemView from './LineItemView';
import Button from '../ui/Button';

type CartViewProps={
  cart : Cart
}

const Container = styled.div`
table{
  width: 100%;
}
td,th{
  padding: 0.5rem;
  text-align: left;
}
  
`;

export default function CartView({ cart }:CartViewProps) {
  const navigate = useNavigate();
  if (!cart.lineItems.length) {
    return (
      <div>
        <h2>장바구니</h2>
        <p>장바구니가 비어있습니다.</p>
      </div>
    );
  }

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>제품</th>
            <th>단가</th>
            <th>수량</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.lineItems.map((lineItem) => (
              <LineItemView key={lineItem.id} lineItem={lineItem} />
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              합계
            </td>
            <td>
              {cart.totalPrice.toLocaleString()}
              원
            </td>
          </tr>
        </tfoot>
      </table>
      <Button onClick={handleClick}>
        주문하기
      </Button>
    </Container>
  );
}
