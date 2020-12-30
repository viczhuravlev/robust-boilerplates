import React from 'react';

import { Emoji } from '@core/components';

import Repository from '../Repository';

import * as T from './ListRepositories.types';
import * as S from './ListRepositories.styles';

function ListRepositories(props: T.ListRepositoriesProps) {
  const { repositories } = props;

  if (!Array.isArray(repositories) || repositories.length === 0) {
    return (
      <S.Empty>
        User hasn{String.fromCharCode(39)}t repositories.
        <Emoji label="Confused Face">😕</Emoji>
      </S.Empty>
    );
  }

  return (
    <S.List>
      {repositories.map((repository) => (
        <Repository key={repository.id} {...repository} />
      ))}
    </S.List>
  );
}

export default ListRepositories;
