import React, { useMemo, useState, useCallback, createContext } from 'react';

import { authApi } from '../api';

import { AuthContextValues, AuthProviderProps } from './authStore.types';

const defaultAuthValues: AuthContextValues = {
  status: 'idle',
  user: null,
  error: null,
  login: () => {
    throw new Error('Method not implement');
  },
  logout: () => {
    throw new Error('Method not implement');
  },
};

export const AuthContext = createContext<AuthContextValues>(defaultAuthValues);
AuthContext.displayName = 'AuthContext';

export function AuthProvider(props: AuthProviderProps) {
  const { children } = props;

  const [authData, setAuthData] = useState<AuthContextValues>({ ...defaultAuthValues });

  const login = useCallback((username: string) => {
    setAuthData({
      ...defaultAuthValues,
      status: 'pending',
    });

    authApi
      .login(username)
      .then((result) => {
        setAuthData({
          ...authData,
          status: 'success',
          error: null,
          user: result,
        });
      })
      .catch((error: Error) => {
        setAuthData({
          ...authData,
          status: 'error',
          error: error.message,
          user: null,
        });
      });
  }, []);

  const logout = useCallback(() => {
    setAuthData({
      ...authData,
      status: 'success',
      error: null,
      user: null,
    });
  }, []);

  const value = useMemo(() => ({ ...authData, login, logout }), [authData, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
