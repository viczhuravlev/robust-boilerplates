import React from 'react';
import { useLocation } from '@reach/router';

import { Navigation, RouterLink, ThemeSwitcher } from '@core/components';

import { useAuth } from '@domains/auth';

import * as S from './MainLayout.styles';
import type * as T from './MainLayout.types';

function MainLayout(props: T.MainLayoutProps) {
  const { children } = props;

  const location = useLocation();

  const { isAuthenticated, logout } = useAuth();

  return (
    <S.Container>
      <Navigation
        items={[
          <ThemeSwitcher />,
          <RouterLink to="/secret">
            <S.TextLink label="Smiling Face with Sunglasses">😎</S.TextLink>
          </RouterLink>,
          isAuthenticated && (
            <S.TextLink label="Left Arrow" onClick={logout}>
              🔄
            </S.TextLink>
          ),
          location.pathname !== '/' && (
            <RouterLink to="/">
              <S.TextLink label="Left Arrow">⬅️</S.TextLink>
            </RouterLink>
          ),
        ].filter(Boolean)}
      />
      {children}
    </S.Container>
  );
}

export default MainLayout;
