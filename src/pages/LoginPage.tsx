import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useLoginFormStore from '../hooks/useLoginFormStore';
import LoginForm from '../components/login/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();
  const [{ accessToken }, store] = useLoginFormStore();

  useEffect(() => {
    store.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      store.reset();
      navigate('/');
    }
  }, [accessToken]);

  return (
    <div>
      <LoginForm />
    </div>
  );
}
