import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import signupFormStore from '../store/SignupFormStore';

export default function useSignupFormStore() {
  const store = container.resolve(signupFormStore);
  return useStore(store);
}
