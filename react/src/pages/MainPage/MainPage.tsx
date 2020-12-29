import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { Emoji } from '@core/components';

import { MainLayout, CenterLayout } from '@core/layouts';

import { useAuth } from '@domains/auth';

import * as S from './MainPage.styles';

function MainPage(_props: RouteComponentProps) {
  const { user } = useAuth();

  return (
    <MainLayout>
      <CenterLayout>
        <S.Content>
          <S.TextContainer>
            <S.Title>
              Hello {user?.name || 'world'}! <Emoji label="Fire">🔥</Emoji>
            </S.Title>
          </S.TextContainer>
          <S.Partition />
          <S.TextContainer>
            <S.Description>
              It{String.fromCharCode(39)}s robust frontend <br /> boilerplate.{' '}
              <Emoji label="Flexed Biceps">💪</Emoji>
            </S.Description>
          </S.TextContainer>
        </S.Content>
      </CenterLayout>
    </MainLayout>
  );
}

export default MainPage;
