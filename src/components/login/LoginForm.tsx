import { useEffect } from 'react';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useLoginFormStore from '../../hooks/useLoginFormStore';
import Button from '../ui/Button';

const Container = styled.div`
  
`;

export default function LoginForm() {
  const { setAccessToken } = useAccessToken();
  const [{
    email, password, error, valid, accessToken,
  }, store] = useLoginFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    store.changeEmail(e.target.value);
  };
  const handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    store.changePassword(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.login();
  };

  return (
    <Container>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input type="email" placeholder="tester@example.com" onChange={handleChangeEmail} value={email} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={handleChangePassword} />
        </label>
        <Button type="submit" disabled={!valid}>
          로그인
        </Button>
      </form>
      {
        error && (
          <p>로그인 실패</p>
        )
      }
    </Container>
  );
}
