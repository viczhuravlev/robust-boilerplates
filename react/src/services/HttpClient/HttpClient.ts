import Logger from '@/services/Logger';

import * as U from './HttpClient.utils';
import type * as T from './HttpClient.types';

class HttpClient implements T.Http {
  readonly baseURL: string;

  readonly headers: T.HttpHeaders;

  readonly options: T.DefaultHttpOptions;

  constructor(options: Partial<T.Http> = {}) {
    this.baseURL = options.baseURL || HttpClient.getUrl('/');
    this.headers = options.headers || {};
    this.options = options.options || U.defaultOptions;
  }

  static getUrl(url: string) {
    return `${process.env.SERVER_URL}api${url}`;
  }

  private async request(url: string, options: RequestInit = {}): Promise<Response> {
    try {
      const response = await fetch(
        this.baseURL + url,
        U.mergeRequestParams(
          {
            ...this.options,
            headers: {
              ...this.options.headers,
              ...this.headers,
            },
          },
          options,
        ),
      );

      return response;
    } catch (error) {
      Logger.error('fetch', error.message);

      throw error;
    }
  }

  private async requestJSON<Response>(
    url: string,
    options: RequestInit = {},
  ): Promise<T.HttpResponse<Response | Error>> {
    try {
      const result = await this.request(url, U.mergeRequestParams(U.defaultOptionsJSON, options));

      /**
       * Error
       */
      if (!result.ok) {
        const serverError: Error = await result.json();

        return U.getApiResponse(serverError, null);
      }

      /**
       * Success
       */
      const response: Response = await result.json();

      return U.getApiResponse(null, response);
    } catch (error) {
      return U.getApiResponse<Response>(error, null);
    }
  }

  setHeader(key: string, value: string) {
    this.headers[key] = value;

    return this;
  }

  getHeader(key: string): string | undefined {
    return this.headers[key];
  }

  setBasicAuth(username: string, password: string) {
    this.headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
    return this;
  }

  setBearerAuth(token: string) {
    this.headers.Authorization = `Bearer ${token}`;
    return this;
  }

  get<Response>(url: string, options = U.extraDefaultOptions) {
    return this.requestJSON<Response>(url, {
      ...options,
      method: 'GET',
    });
  }

  post<Response>(url: string, body?: unknown, options = U.extraDefaultOptions) {
    return this.requestJSON<Response>(url, {
      ...options,
      body: U.getBody(body),
      method: 'POST',
    });
  }

  put<Response>(url: string, body?: unknown, options = U.extraDefaultOptions) {
    return this.requestJSON<Response>(url, {
      ...options,
      body: U.getBody(body),
      method: 'PUT',
    });
  }

  patch<Response>(url: string, body: unknown, options = U.extraDefaultOptions) {
    return this.requestJSON<Response>(url, {
      ...options,
      body: U.getBody(body),
      method: 'PATCH',
    });
  }

  delete(url: string, options = U.extraDefaultOptions) {
    return this.requestJSON<void>(url, {
      ...options,
      method: 'DELETE',
    });
  }
}

export default HttpClient;
