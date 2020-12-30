import React from 'react';
import { Router as RouterOrigin } from '@reach/router';
import { styled } from '@linaria/react';

import { useAuth } from '@domains/auth';

const MainPage = React.lazy(() => import('../pages/MainPage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const SecretPage = React.lazy(() => import('../pages/SecretPage'));

const Router = styled(RouterOrigin)`
  width: 100%;
  height: 100%;
`;

function AppRouter() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <Router>
        <MainPage path="/" />
        <SecretPage path="/secret" />
      </Router>
    );
  }

  return (
    <Router>
      <MainPage path="/" />
      <LoginPage path="/login" />
      <LoginPage default />
    </Router>
  );
}

export default AppRouter;
