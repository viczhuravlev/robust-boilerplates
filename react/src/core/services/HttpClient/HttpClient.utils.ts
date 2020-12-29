import type * as T from './HttpClient.types';

export const defaultOptions: T.HttpOptions = { headers: {} };
export const defaultExtraOptions: T.ExtraHttpOptions = {};
export const defaultOptionsJSON: T.HttpOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

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

function isJSON(response: Response): boolean {
  const contentType = response.headers.get('content-type');

  return contentType ? contentType.includes('application/json') : false;
}

export async function getResponseResult<Data>(response: Response): Promise<Data> {
  const result: Data = isJSON(response) ? await response.json() : await response.text();

  return result;
}

export class ServerError extends Error {
  readonly info: unknown;

  constructor(message: string, info: unknown) {
    super(message);

    this.name = 'ServerError';
    this.info = info;
  }
}
