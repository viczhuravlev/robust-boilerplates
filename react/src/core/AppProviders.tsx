import React, { StrictMode, ReactNode } from 'react';

import { AuthProvider } from '@domains/auth';

interface AppProvidersProps {
  children: ReactNode;
}

function AppProviders(props: AppProvidersProps) {
  const { children } = props;

  return (
    <StrictMode>
      <AuthProvider>{children}</AuthProvider>
    </StrictMode>
  );
}

export default AppProviders;
