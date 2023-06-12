import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../apiService/ApiService';

@singleton()
@Store()

export default class LoginFormStore {
  email = '';

  password = '';

  error = false;

  accessToken = '';

  async login() {
    try {
      const accessToken = await apiService.login({
        email: this.email,
        password: this.password,
      });
      this.setAccessToken(accessToken);
    } catch (error) {
      this.setError();
    }
  }

  get valid() {
    return this.email.includes('@') && !!this.password;
  }

  @Action()
  changeEmail(email:string) {
    this.email = email;
  }

  @Action()
  changePassword(password:string) {
    this.password = password;
  }

  @Action()
  setError() {
    this.error = true;
  }

  @Action()
  setAccessToken(accessToken:string) {
    this.accessToken = accessToken;
  }

  @Action()
  reset() {
    this.email = '';
    this.password = '';
    this.accessToken = '';
    this.error = false;
  }
}
