import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../apiService/ApiService';
import { Cart, nullCart } from '../types';

@singleton()
@Store()
export default class CartStore {
  cart: Cart = nullCart;

  async fetchCart() {
    this.setCart(nullCart);
    const cart = await apiService.fetchCart();
    this.setCart(cart);
  }

  @Action()
  setCart(payload:Cart) {
    this.cart = payload;
  }
}
