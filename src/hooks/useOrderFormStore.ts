import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import OrderFormStore from '../store/OrderFormStore';

export default function useOrderFormStore() {
  const store = container.resolve(OrderFormStore);
  return useStore(store);
}
