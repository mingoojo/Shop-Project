import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../apiService/ApiService';
import { ProductSummary } from '../types';

@singleton()
@Store()
export default class ProductsStore {
  products:ProductSummary[] = [];

  async fetchProducts({ categoryId }:{categoryId:string}) {
    this.setProducts([]);
    const products = await apiService.fetchProducts({ categoryId });
    this.setProducts(products);
  }

  @Action()
  setProducts(payload:ProductSummary[]) {
    this.products = payload;
  }
}
