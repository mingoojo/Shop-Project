import { Link } from 'react-router-dom';
import { LineItem } from '../../types';
import Options from './Options';

type LineItemViewProps = {
  lineItem : LineItem
}

export default function LineItemView({ lineItem }:LineItemViewProps) {
  return (
    <tr>
      <td>
        <Link to={`/products/${lineItem.product.id}`}>
          {lineItem.product.name}
        </Link>
        <Options options={lineItem.options} />
      </td>
      <td>
        {lineItem.unitPrice.toLocaleString()}
        원
      </td>
      <td>
        {lineItem.quantity}
        개
      </td>
      <td>
        {lineItem.totalPrice.toLocaleString()}
        원
      </td>
    </tr>
  );
}
