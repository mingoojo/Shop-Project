import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { OrderSummary } from '../types';
import apiService from '../apiService/ApiService';

@singleton()
@Store()
export default class OrderListStore {
  orders:OrderSummary[] = [];

  async fetchOrders() {
    this.setOrders([]);

    const orders = await apiService.fetchOrders();

    this.setOrders(orders);
  }

  @Action()
  setOrders(orders:OrderSummary[]) {
    this.orders = orders;
  }
}
