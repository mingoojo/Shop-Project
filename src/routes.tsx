import Layout from './components/Layout';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      // { path: '/order', element: <OrderPage /> },
      // { path: '/order/complete', element: <OrderPage /> },
      // { path: '/orders', element: <OrderPage /> },
      // { path: '/orders/:id', element: <OrderPage /> },
      { path: '/login', element: <LoginPage /> },
      // { path: '/signup', element: <SignUpPage /> },
      // { path: '/signup/complete', element: <SignUpPage /> },
    ],
  },
];

export default routes;
