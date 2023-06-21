import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupComPletePage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);
  return (
    <div>
      가입완료
    </div>
  );
}
