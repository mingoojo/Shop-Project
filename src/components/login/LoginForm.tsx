import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useLoginFormStore from '../../hooks/useLoginFormStore';
import Button from '../Ui/Button';
import TextBox from '../Ui/TextBox';

const Container = styled.div``;

export default function LoginForm() {
  const { setAccessToken } = useAccessToken();

  const [{
    email, password, valid, error, accessToken,
  }, store] = useLoginFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    store.login();
  }
  const handleChangeEmail = (value: string) => {
    store.changeEmail(value);
  };

  const handleChangePassword = (value: string) => {
    store.changePassword(value);
  };

  return (
    <Container>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <TextBox
          label="E-mail"
          placeholder="tester@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextBox
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <Button type="submit" disabled={!valid}>
          login
        </Button>
        <p>
          <Link to="/signup">
            회원가입
          </Link>
        </p>
        {
          error && (
            <p>로그인 실패</p>
          )
        }
      </form>
    </Container>
  );
}
