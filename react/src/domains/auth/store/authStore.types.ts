import { ReactNode } from 'react';

import { User } from '@domains/user';

import { LoginRequest } from '../entities';

export interface AuthContextValues {
  status: 'idle' | 'pending' | 'success' | 'error';
  error: string | null;
  user: null | User;
  login: (params: LoginRequest) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
