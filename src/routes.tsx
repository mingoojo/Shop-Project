import Layout from './components/Layout';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OrderCompletePage from './pages/OrderCompletePage';
import OrderDetailPage from './pages/OrderDetailPage';
import OrderListPage from './pages/OrderListPage';
import OrderPage from './pages/OrderPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';
import SignupComPletePage from './pages/SignupComPletePage';
import SignupPage from './pages/SignupPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/signup/complete', element: <SignupComPletePage /> },
      { path: '/orders', element: <OrderListPage /> },
      { path: '/orders/:id', element: <OrderDetailPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
