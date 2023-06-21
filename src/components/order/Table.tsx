import styled from 'styled-components';
import { LineItem } from '../../types';
import LineItemView from '../cart/LineItemView';

type TableProps = {
  totalPrice : number
  lineItems : LineItem[]
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

export default function Table({ totalPrice, lineItems }:TableProps) {
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
            lineItems.map((lineItem) => (
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
              {totalPrice.toLocaleString()}
              원
            </td>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
}
