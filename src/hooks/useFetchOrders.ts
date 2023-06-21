import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { useEffect } from 'react';
import OrderListStore from '../store/OrderListStore';

export default function useFetchOrders() {
  const store = container.resolve(OrderListStore);
  const [{ orders }] = useStore(store);

  useEffect(() => {
    store.fetchOrders();
  }, [store]);

  return {
    orders,
  };
}
