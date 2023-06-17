import React, { useEffect } from 'react';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useSignupFormStore from '../../hooks/useSignupFormStore';
import Button from '../Ui/Button';
import TextBox from '../Ui/TextBox';

const Container = styled.div``;

export default function SignupForm() {
  const { setAccessToken } = useAccessToken();
  const [{
    email, password, name, passwordConfirmation, error, accessToken, valid,
  }, store] = useSignupFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleChangeEmail = (value:string) => {
    store.changeEmail(value);
  };
  const handleChangeName = (value:string) => {
    store.changeName(value);
  };
  const handleChangePassword = (value:string) => {
    store.changePassword(value);
  };
  const handleChangePasswordConfirmation = (value:string) => {
    store.changePasswordConfirmation(value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.signup();
  };

  return (
    <Container>
      <h1>회원 가입</h1>
      <form onSubmit={handleSubmit}>
        <TextBox
          label="E-mail"
          value={email}
          placeholder="tester@example.com"
          onChange={handleChangeEmail}
        />
        <TextBox
          label="Name"
          value={name}
          onChange={handleChangeName}
        />
        <TextBox
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <TextBox
          label="PasswordConfirmation"
          type="password"
          value={passwordConfirmation}
          onChange={handleChangePasswordConfirmation}
        />
        <Button type="submit" disabled={!valid}>
          회원가입
        </Button>
        {
          error && (
            <p>회원가입 실패</p>
          )
        }
      </form>
    </Container>
  );
}
