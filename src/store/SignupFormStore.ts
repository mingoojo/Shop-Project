import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../apiService/ApiService';

@singleton()
@Store()
export default class SignupFormStore {
  email = '';

  name = '';

  password = '';

  passwordConfirmation = '';

  error = false;

  accessToken = '';

  @Action()
  changeEmail(email : string) {
    this.email = email;
  }

  @Action()
  changePassword(password : string) {
    this.password = password;
  }

  @Action()
  changeName(name : string) {
    this.name = name;
  }

  @Action()
  changePasswordConfirmation(passwordConfirmation : string) {
    this.passwordConfirmation = passwordConfirmation;
  }

  @Action()
  setAccessToken(accessToken : string) {
    this.accessToken = accessToken;
  }

  @Action()
  setError() {
    this.error = true;
  }

  @Action()
  reset() {
    this.email = '';
    this.name = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.error = false;
    this.accessToken = '';
  }

  async signup() {
    try {
      const accessToken = await apiService.signup({
        email: this.email,
        password: this.password,
        name: this.name,
      });
      this.setAccessToken(accessToken);
    } catch (err) {
      this.setError();
    }
  }

  get valid() {
    return this.email.includes('@')
      && !!this.name
      && this.password.length >= 4
      && this.password === this.passwordConfirmation;
  }
}
