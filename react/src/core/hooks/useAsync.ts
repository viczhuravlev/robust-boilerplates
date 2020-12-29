/**
 * @docs: https://usehooks.com/useAsync/
 */

import { useState, useCallback, useEffect } from 'react';

export function useAsync<T = unknown, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true,
) {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response: T) => {
        setValue(response);
        setStatus('success');
      })
      .catch((err: E) => {
        setError(err);
        setStatus('error');
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
}
