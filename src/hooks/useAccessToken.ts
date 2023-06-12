import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import apiService from '../apiService/ApiService';

export default function useAccessToken() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    apiService.setAccessToken(accessToken);
  }, [accessToken]);

  return {
    accessToken, setAccessToken,
  };
}
