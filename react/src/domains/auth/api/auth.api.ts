import { HttpClient } from '@core/services';

import { LoginRequest, LoginResponse } from '../entities';

class AuthApi extends HttpClient {
  login(username: LoginRequest) {
    return this.get<LoginResponse>(`/users/${username}`);
  }
}

export const authApi = new AuthApi({
  baseURL: 'https://api.github.com',
});
