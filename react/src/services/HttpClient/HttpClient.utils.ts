import type * as T from './HttpClient.types';

export const defaultOptions: T.HttpOptions = { headers: {} };
export const defaultOptionsJSON: T.HttpOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const extraDefaultOptions: T.ExtraDefaultHttpOptions = {};

export function getBody(body?: unknown): string | undefined {
  return body ? JSON.stringify(body) : undefined;
}

export function mergeRequestParams(
  currentRequestParams: RequestInit,
  newRequestParams: RequestInit,
): RequestInit {
  return {
    ...currentRequestParams,
    ...newRequestParams,
    headers: {
      ...currentRequestParams.headers,
      ...newRequestParams.headers,
    },
  };
}

export function getApiResponse<Response>(
  error: null | Error,
  response: null | Response,
): T.HttpResponse<Response> {
  return error
    ? {
        status: 'error',
        error,
      }
    : {
        status: 'success',
        response,
      };
}
