import React, { SyntheticEvent } from 'react';

import { useAuth } from '@domains/auth/hooks';

import * as S from './LoginForm.styles';

function LoginForm() {
  const { login } = useAuth();

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    /* eslint-disable */
    // TODO: fix it
    // @ts-ignore
    login(event.target.username.value);
    /* eslint-enable */
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        Your name on github
        <S.Input name="username" />
      </S.Label>
      <S.Button>login</S.Button>
    </S.Form>
  );
}

export default LoginForm;
