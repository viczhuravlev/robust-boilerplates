import React from 'react';

import * as S from './Navigation.styles';
import * as T from './Navigation.types';

function Navigation(props: T.NavigationProps) {
  const { items } = props;

  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <S.Nav>
      <S.NavList>
        {items.map((item, index) => (
          <S.NavListItem key={index}>{item}</S.NavListItem>
        ))}
      </S.NavList>
    </S.Nav>
  );
}

export default Navigation;
