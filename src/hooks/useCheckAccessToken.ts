import { useEffect } from 'react';
import useAccessToken from './useAccessToken';
import apiService from '../apiService/ApiService';

export default function useCheckAccessToken():void {
  const { accessToken, setAccessToken } = useAccessToken();
  useEffect(() => {
    const fetchCurrentuser = async () => {
      try {
        await apiService.fetchCurrentuser();
      } catch (error) {
        setAccessToken('');
      }
    };
    fetchCurrentuser();
  }, [accessToken, setAccessToken]);
}
