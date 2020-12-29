import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { MainLayout, CenterLayout } from '@core/layouts';

import { LoginForm } from '@domains/auth';

function LoginPage(_props: RouteComponentProps) {
  return (
    <MainLayout>
      <CenterLayout>
        <LoginForm />
      </CenterLayout>
    </MainLayout>
  );
}

export default LoginPage;
