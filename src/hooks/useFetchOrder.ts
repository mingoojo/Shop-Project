import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import OrderDetailStore from '../store/OrderDetailStore';

export default function useFetchOrder({ orderId }:{
  orderId:string
}) {
  const store = container.resolve(OrderDetailStore);
  const [{ error, loading, order }] = useStore(store);

  useEffect(() => {
    store.fetchOrder({ orderId });
  }, [store]);

  return {
    error, loading, order,
  };
}
