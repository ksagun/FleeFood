import { Login } from '../../models/login';

export interface LoginState {
  login: Login | any;
  loading: boolean;
  loaded: boolean;
  error: string;
}
