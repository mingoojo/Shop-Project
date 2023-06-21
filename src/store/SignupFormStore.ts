import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../apiService/ApiService';

@singleton()
@Store()
export default class signupFormStore {
  email = '';

  password = '';

  name = '';

  passwordConfirmation = '';

  error = false;

  accessToken = '';

  get valid() {
    return this.email.includes('@')
      && !!this.name
      && this.password.length >= 4
      && this.password === this.passwordConfirmation;
  }

  @Action()
  changeEmail(email:string) {
    this.email = email;
  }

  @Action()
  changeName(name:string) {
    this.name = name;
  }

  @Action()
  changePassword(password:string) {
    this.password = password;
  }

  @Action()
  changePasswordConfirmation(password:string) {
    this.passwordConfirmation = password;
  }

  @Action()
  setAccessToken(accessToken:string) {
    this.accessToken = accessToken;
  }

  @Action()
  setError() {
    this.error = true;
  }

  @Action()
  reset() {
    this.email = '';
    this.password = '';
    this.name = '';
    this.passwordConfirmation = '';
    this.accessToken = '';
    this.error = false;
  }

  async signup() {
    try {
      const accessToken = await apiService.signup({
        name: this.name,
        password: this.password,
        email: this.email,
      });
      this.setAccessToken(accessToken);
    } catch (error) {
      this.setError();
    }
  }
}
