import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import apiService from '../../apiService/ApiService';
import useAccessToken from '../../hooks/useAccessToken';
import useFetchCategories from '../../hooks/useFetchCategories';
import Button from '../Ui/Button';

const Container = styled.header`
h1{
  font-size: 3rem;
}
ul{
  display: flex;
  margin-block: 1.5rem;
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
    // 로그아웃 기능 구현
    await apiService.logout();
    // 로컬스토리지에 엑세스 토큰 삭제
    setAccessToken('');
    // 홈으로 이동
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
            <Link to="/products">Products</Link>
            <ul>
              {
                categories.map((category, index) => {
                  const key = `${category.id}-${index}`;
                  return (
                    <li key={key}>
                      <Link to={`/products?categoryId=${category.id}`}>
                        {category.name}
                      </Link>
                    </li>
                  );
                })
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
              <li>
                <Link to="/login">Login</Link>
              </li>
            )
          }
        </ul>
      </nav>
    </Container>
  );
}
