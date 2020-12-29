export type HttpQuery = Record<string, any>;

interface HttpQueryOptions {
  query?: HttpQuery;
}

export type HttpHeaders = Record<string, string>;

export type HttpOptions = RequestInit & HttpQueryOptions;
export type ExtraHttpOptions = Omit<RequestInit, 'body' | 'headers'>;

export interface Http {
  readonly baseURL: string;
  readonly headers: HttpHeaders;
  readonly options: Omit<HttpOptions, 'body'>;
}
