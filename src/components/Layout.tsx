import { Outlet } from 'react-router-dom';
import Header from './defaults/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
