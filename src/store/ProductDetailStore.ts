import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { ProductDetail, nullProductDetail } from '../types';
import apiService from '../apiService/ApiService';

@singleton()
@Store()
export default class ProductDetailStore {
  product: ProductDetail = nullProductDetail;

  error = false;

  loading = true;

  async fetchProduct({ productId }:{productId:string}) {
    this.startLoading();

    try {
      const product = await apiService.fetchProduct({ productId });
      this.setProduct(product);
    } catch (error) {
      this.setError();
    }
  }

  @Action()
  setProduct(product:ProductDetail) {
    this.product = product;
    this.error = false;
    this.loading = false;
  }

  @Action()
  private startLoading() {
    this.product = nullProductDetail;
    this.error = false;
    this.loading = true;
  }

  @Action()
  private setError() {
    this.product = nullProductDetail;
    this.error = true;
    this.loading = false;
  }
}
