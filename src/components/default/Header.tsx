import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useFetchCategories from '../../hooks/useFetchCategories';
import useAccessToken from '../../hooks/useAccessToken';
import Button from '../ui/Button';
import apiService from '../../apiService/ApiService';

const Container = styled.header`
margin-block: 1rem;
h1{
  font-size: 3rem;
}
ul{
  display: flex;
  margin-block: 1rem;
  li{
    margin-right: 1rem;
  }
}
`;

export default function Header() {
  const { categories } = useFetchCategories();
  const { accessToken, setAccessToken } = useAccessToken();
  const navigate = useNavigate();
  const handleClickLogout = async () => {
    await apiService.logout();
    setAccessToken('');
    navigate('/');
  };
  return (
    <Container>
      <nav>
        <h1>Shop</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
            <ul>
              {
                categories.map((category) => (
                  <li key={category.id}>
                    <Link to={`/products?categoryId=${category.id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </li>
          {
            accessToken ? (
              <>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li>
                  <Button onClick={handleClickLogout}>
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )
          }
        </ul>
      </nav>
    </Container>
  );
}
