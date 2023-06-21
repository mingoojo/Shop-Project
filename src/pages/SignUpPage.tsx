import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SignupForm from '../components/signup/SignupForm';
import useSignupFormStore from '../hooks/useSignupFormStore';

export default function SignupPage() {
  const navigate = useNavigate();
  const [{ accessToken }, store] = useSignupFormStore();
  useEffect(() => {
    store.reset();
  }, []);
  useEffect(() => {
    if (accessToken) {
      navigate('/signup/complete');
    }
  }, [accessToken]);
  return (
    <div>
      <SignupForm />
    </div>
  );
}
