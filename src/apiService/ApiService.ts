import axios from 'axios';
import {
  Cart, Category, ProductDetail, ProductSummary,
} from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://shop-demo-api-02.fly.dev';

class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  private accessToken = '';

  setAccessToken(accessToken:string) {
    if (accessToken === this.accessToken) {
      return;
    }
    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;
    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: { Authorization: authorization },
    });
  }

  async fetchCategories(): Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }

  async fetchProducts({ categoryId }: {categoryId:string}): Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products', {
      params: { categoryId },
    });
    const { products } = data;
    return products;
  }

  async fetchProduct({ productId }: {productId:string}): Promise<ProductDetail> {
    const { data } = await this.instance.get(`/products/${productId}`);
    return data;
  }

  async fetchCart(): Promise<Cart> {
    const { data } = await this.instance.get('/cart');
    return data;
  }

  async addProductToCart({ productId, options, quantity }:{
    productId:string,
    options:{
      id: string,
      itemId : string
    }[],
    quantity:number
  }):Promise<void> {
    await this.instance.post('/cart/line-items', {
      productId, options, quantity,
    });
  }

  async login({ email, password }:{ email:string, password:string }):Promise<string> {
    const { data } = await this.instance.post('/session', { email, password });
    const { accessToken } = data;
    return accessToken;
  }
}

const apiService = new ApiService();
export default apiService;
