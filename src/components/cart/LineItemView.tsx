import { Link } from 'react-router-dom';
import { LineItem } from '../../types';
import Options from './Option';

type LineItemViewProps = {
  lineItem: LineItem;
};

export default function LineItemView({ lineItem }: LineItemViewProps) {
  return (
    <tr>
      <td>
        <Link to={`/products/${lineItem.product.id}`}>
          {lineItem.product.name}
        </Link>
        <Options options={lineItem.options} />
      </td>
      <td>
        {lineItem.unitPrice}
        원
      </td>
      <td>{lineItem.quantity}</td>
      <td>
        {lineItem.totalPrice}
        원
      </td>
    </tr>
  );
}
