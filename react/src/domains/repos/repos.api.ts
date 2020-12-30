import { HttpClient } from '@core/services';

import { Repositories } from './repos';

class ReposApi extends HttpClient {
  getAllRepos(username: string) {
    return this.get<Repositories>(`/users/${username}/repos`);
  }
}

export const reposApi = new ReposApi({
  baseURL: 'https://api.github.com',
});
