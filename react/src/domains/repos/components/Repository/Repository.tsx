import React from 'react';

import * as T from './Repository.types';
import * as S from './Repository.styles';

function Repository(props: T.RepositoryProps) {
  const { name, license, html_url, description } = props;

  return (
    <S.Repository>
      <a href={html_url} target="_blank" rel="noreferrer">
        {name}
      </a>{' '}
      {license?.name ? <S.License>({license?.name})</S.License> : ''}
      <p>{description}</p>
    </S.Repository>
  );
}

export default Repository;
