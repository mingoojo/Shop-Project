import Layout from './components/Layout';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OrderDetailPage from './pages/OrderDetailPage';
import OrderListPage from './pages/OrderListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';
import SignUpCompletePage from './pages/SignUpCompletePage';
import SignUpPage from './pages/SignUpPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      // { path: '/order', element: <OrderDetailPage /> },
      // { path: '/order/complete', element: <OrderPage /> },
      { path: '/orders', element: <OrderListPage /> },
      { path: '/orders/:id', element: <OrderDetailPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/signup/complete', element: <SignUpCompletePage /> },
    ],
  },
];

export default routes;
