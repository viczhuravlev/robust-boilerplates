import React from 'react';
import { useLocation } from '@reach/router';

import Navigation from '@core/components/Navigation';
import ThemeSwitcher from '@core/components/ThemeSwitcher';

import * as S from './MainLayout.styles';
import type * as T from './MainLayout.types';

function MainLayout(props: T.MainLayoutProps) {
  const { children } = props;

  const location = useLocation();

  return (
    <S.Container>
      <Navigation
        items={[
          <ThemeSwitcher />,
          <S.RouterLink to="/secret">
            <span role="img" aria-label="Smiling Face with Sunglasses">
              😎
            </span>
          </S.RouterLink>,
          location.pathname !== '/' && (
            <S.RouterLink to="/">
              <span role="img" aria-label="Left Arrow">
                ⬅️
              </span>
            </S.RouterLink>
          ),
        ]}
      />
      {children}
    </S.Container>
  );
}

export default MainLayout;
