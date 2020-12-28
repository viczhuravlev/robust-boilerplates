/**
 * Settings
 */
export type HttpHeaders = Record<string, string>;
export type HttpOptions = Omit<RequestInit, 'body'>;

export type DefaultHttpOptions = Omit<RequestInit, 'body'>;
export type ExtraDefaultHttpOptions = Omit<RequestInit, 'body' | 'headers'>;

export interface Http {
  readonly baseURL: string;
  readonly headers: HttpHeaders;
  readonly options: DefaultHttpOptions;
}

interface HttpResponseError {
  status: 'error';
  error: Error;
}

interface HttpResponseSuccess<Response = void> {
  status: 'success';
  response: Response | null;
}

export type HttpResponse<Response = void> = HttpResponseError | HttpResponseSuccess<Response>;
