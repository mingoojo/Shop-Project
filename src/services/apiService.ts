import axios from 'axios';
import { Category, ProductDetail, ProductSummary } from '../types';

const BaseUrl = process.env.REACT_APP_API_BASE_URL || 'localhost:3000/';

export default class ApiService {
  private instance = axios.create({
    baseURL: BaseUrl,
  });

  async fetchProducts({ categoryId }:{categoryId?:string} = {}):Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products', {
      params: { categoryId },
    });
    const { products } = data;
    return products;
  }

  async fetchProduct({ productId }:{productId:string}):Promise<ProductDetail> {
    const { data } = await this.instance.get(`/products/${productId}`);
    return data;
  }

  async fetchCategories():Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }
}

export const apiService = new ApiService();
