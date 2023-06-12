import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
  const { accessToken } = useAccessToken();
  const handleClickLogout = () => {
    // 123
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
