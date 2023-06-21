import axios from 'axios';
import {
  Category, ProductDetail, ProductSummary, OrderDetail, OrderSummary,
} from '../types';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

class ApiService {
  private instance = axios.create({
    baseURL: apiBaseUrl,
  });

  private accessToken = '';

  // 프로덕트 정보 받아오기
  async fetchProducts({ categoryId }:{categoryId?:string}):Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products', {
      params: { categoryId },
    });
    const { products } = data;
    return products;
  }

  // 카테고리 정보 받아오기
  async fetchCategories():Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }

  // 프로덕트 디테일 받아오기
  async fetchProduct({ productId }:{productId:string}):Promise<ProductDetail> {
    const { data } = await this.instance.get(`/products/${productId}`);
    const product = data;
    return product;
  }

  // 카트 정보 받아오기
  async fetchCart() {
    const { data } = await this.instance.get('/cart');
    return data;
  }

  // 카트에 담기
  async addProductToCart({ productId, options, quantity }:{
    productId:string;
    options:{
      id : string;
      itemId: string
    }[]
    quantity:number
  }):Promise<void> {
    await this.instance.post('/cart/line-items', {
      productId, options, quantity,
    });
  }

  // 로그인 기능
  async login({ email, password }: {email : string, password: string}):Promise<string> {
    const { data } = await this.instance.post('/session', { email, password });
    const { accessToken } = data;
    return accessToken;
  }

  // api호출시 엑세스 토큰 사용
  setAccessToken(accessToken:string) {
    if (accessToken === this.accessToken) {
      return;
    }

    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;

    this.instance = axios.create({
      baseURL: apiBaseUrl,
      headers: { Authorization: authorization },
    });
    this.accessToken = accessToken;
  }

  // 유저정보 얻기 || 엑세스토큰 유효성 검사
  async fetchCurrentuser():Promise<{
    id : string;
    name : string;
  }> {
    const { data } = await this.instance.get('/users/me');
    const { id, name } = data;
    return { id, name };
  }

  // 로그아웃 기능
  async logout():Promise<void> {
    await this.instance.delete('/session');
  }

  // 가입 기능
  async signup({ email, name, password }:{
    email: string
    name: string
    password : string
  }):Promise<string> {
    const { data } = await this.instance.post('/users', {
      email, password, name,
    });
    const { accessToken } = data;
    return accessToken;
  }

  async fetchOrder({ orderId }:{orderId:string}):Promise<OrderDetail> {
    const { data } = await this.instance.get(`/orders/${orderId}`);
    return data;
  }

  async fetchOrders():Promise<OrderSummary[]> {
    const { data } = await this.instance.get('/orders/');
    const { orders } = data;
    return orders;
  }

  async createOrder({ receiver, payment }: {
    receiver: {
      name: string;
      address1: string;
      address2: string;
      postalCode: string;
      phoneNumber: string;
    };
    payment: {
      merchantId: string;
      transactionId: string;
    };
  }): Promise<void> {
    await this.instance.post('/orders', { receiver, payment });
  }
}

const apiService = new ApiService();
export default apiService;
