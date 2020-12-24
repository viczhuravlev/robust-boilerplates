import React from 'react';

import * as S from './CenterLayout.styles';
import type * as T from './CenterLayout.types';

function CenterLayout(props: T.CenterLayoutProps) {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
}

export default CenterLayout;
