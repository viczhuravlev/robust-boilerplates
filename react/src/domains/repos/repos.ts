export interface RepositoryType {
  id: string;
  name: string;
  license?: {
    name: string;
  };
  html_url: string;
  description: string;
}

export type Repositories = RepositoryType[];
