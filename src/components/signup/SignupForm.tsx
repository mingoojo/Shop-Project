import styled from 'styled-components';
import { useEffect } from 'react';
import useSignupFormStore from '../../hooks/useSignupFormStore';
import Button from '../ui/Button';
import useAccessToken from '../../hooks/useAccessToken';

const Container = styled.div`
label{
  display: block;
}
`;

export default function SignupForm() {
  const { setAccessToken } = useAccessToken();
  const [{
    email, name, password, passwordConfirmation, valid, error, accessToken,
  }, store] = useSignupFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    store.changeEmail(e.target.value);
  };
  const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    store.changeName(e.target.value);
  };
  const handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    store.changePassword(e.target.value);
  };
  const handleChangePasswordConfirmation = (e:React.ChangeEvent<HTMLInputElement>) => {
    store.changePasswordConfirmation(e.target.value);
  };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.signup();
  };
  return (
    <Container>
      SignupForm
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" placeholder="" value={name} onChange={handleChangeName} />
        </label>
        <label>
          E-mail
          <input type="text" placeholder="tester@example.com" value={email} onChange={handleChangeEmail} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={handleChangePassword} />
        </label>
        <label>
          Password Confirmation
          <input type="password" value={passwordConfirmation} onChange={handleChangePasswordConfirmation} />
        </label>
        <Button type="submit" disabled={!valid}>
          회원가입
        </Button>
        {error && (
          <p>회원 가입 실패</p>
        )}
      </form>
    </Container>
  );
}
