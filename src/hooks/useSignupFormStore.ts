import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import SignupFormStore from '../store/SignupFormStore';

export default function useSignupFormStore() {
  const store = container.resolve(SignupFormStore);

  return useStore(store);
}
