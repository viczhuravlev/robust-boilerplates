import { useContext } from 'react';

import { AuthContext } from '../store';

export function useAuth() {
  const state = useContext(AuthContext);

  if (state === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isPending = state.status === 'pending';

  const isAuthenticated = state.user && isSuccess;

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}
