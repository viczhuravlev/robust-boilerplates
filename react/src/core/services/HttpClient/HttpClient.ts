import queryString from 'qs';

import { Logger } from '../Logger';

import * as U from './HttpClient.utils';
import type * as T from './HttpClient.types';

class HttpClient implements T.Http {
  readonly baseURL: string;

  readonly headers: T.HttpHeaders;

  readonly options: T.HttpOptions;

  constructor(options: Partial<T.Http> = {}) {
    this.baseURL = options.baseURL || HttpClient.getUrl('/');
    this.headers = options.headers || {};
    this.options = options.options || U.defaultOptions;
  }

  static getUrlWithQuery(url: string, query?: T.HttpQuery): string {
    if (!query) {
      return url;
    }

    const formattedQuery = queryString.stringify(query, {
      skipNulls: true,
      arrayFormat: 'repeat',
    });

    return `${url}?${formattedQuery}`;
  }

  static getUrl(url: string, query?: T.HttpQuery): string {
    const fullUrl = `${process.env.SERVER_URL}api${url}`;

    return HttpClient.getUrlWithQuery(fullUrl, query);
  }

  async request<Data>(url: string, options: T.HttpOptions): Promise<Data> {
    const { query, ...requestOptions } = options;

    try {
      const response = await fetch(
        HttpClient.getUrlWithQuery(this.baseURL + url, query),
        U.mergeRequestParams(
          {
            ...U.defaultOptions,
            ...this.options,
            headers: {
              ...U.defaultOptions.headers,
              ...this.options.headers,
              ...this.headers,
            },
          },
          requestOptions,
        ),
      );

      /**
       * error
       */
      if (!response.ok) {
        const serverError = await U.getResponseResult<unknown>(response);

        throw new U.ServerError(response.statusText, serverError);
      }

      /**
       * success
       */
      const result = await U.getResponseResult<Data>(response);

      return result;
    } catch (error) {
      Logger.error(`An error occurred while sending data: ${error}`);

      throw error;
    }
  }

  async requestJSON<Data>(url: string, options: T.HttpOptions): Promise<Data> {
    return this.request<Data>(url, U.mergeRequestParams(U.defaultOptionsJSON, options));
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

  get<Data>(url: string, options = U.defaultExtraOptions): Promise<Data> {
    return this.requestJSON<Data>(url, {
      ...options,
      method: 'GET',
    });
  }

  post<Data>(url: string, body?: unknown, options = U.defaultExtraOptions): Promise<Data> {
    return this.requestJSON<Data>(url, {
      ...options,
      body: U.getBody(body),
      method: 'POST',
    });
  }

  put<Data>(url: string, body: unknown, options = U.defaultExtraOptions): Promise<Data> {
    return this.requestJSON<Data>(url, {
      ...options,
      body: U.getBody(body),
      method: 'PUT',
    });
  }

  patch<Data>(url: string, body: unknown, options = U.defaultExtraOptions): Promise<Data> {
    return this.requestJSON<Data>(url, {
      ...options,
      body: U.getBody(body),
      method: 'PATCH',
    });
  }

  delete(url: string, options = U.defaultExtraOptions): Promise<void> {
    return this.requestJSON<void>(url, {
      ...options,
      method: 'DELETE',
    });
  }

  send(url: string, file: string | FormData, options: T.HttpOptions): Promise<void> {
    return this.request(url, {
      ...options,
      body: file,
      method: 'POST',
    });
  }
}

export default HttpClient;
