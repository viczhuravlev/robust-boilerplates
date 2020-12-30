import React, { useCallback } from 'react';
import { styled } from '@linaria/react';
import { RouteComponentProps } from '@reach/router';

import { useAsync } from '@core/hooks';

import { Loader } from '@core/components';

import { MainLayout, CenterLayout } from '@core/layouts';

import { useAuth } from '@domains/auth';
import { UserInfo } from '@domains/user';
import { reposApi, ListRepositories } from '@domains/repos';

export const ContainerRepositories = styled.div`
  width: 450px;
  max-height: 40vh;
  margin-left: 4rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

function SecretPage(_props: RouteComponentProps) {
  const { user } = useAuth();

  const getAllRepos = useCallback(() => {
    if (!user) {
      return Promise.resolve([]);
    }

    return reposApi.getAllRepos(user.login);
  }, [user]);

  const { status, value } = useAsync(getAllRepos);

  return (
    <MainLayout>
      <CenterLayout>
        <UserInfo user={user} />
        <ContainerRepositories>
          {status === 'pending' ? <Loader isContainer /> : null}
          {status === 'success' ? <ListRepositories repositories={value} /> : null}
        </ContainerRepositories>
      </CenterLayout>
    </MainLayout>
  );
}

export default SecretPage;
