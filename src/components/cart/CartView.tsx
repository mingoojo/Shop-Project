import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Cart } from '../../types';
import Button from '../Ui/Button';
import LineItemView from './LineItemView';

type CartViewProps ={
  cart : Cart
}

const Container = styled.div`
table{
  width: 100%;
}
th,td{
  padding: .5rem;
  text-align: left;
  border:  2px solid #222;
}
`;

export default function CartView({ cart }:CartViewProps) {
  const navigate = useNavigate();

  if (!cart) {
    return (
      <p>장바구니가 비었습니다.</p>
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
            <th colSpan={3}>
              합계
            </th>
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
