import React from 'react';

import * as S from './Loader.styles';
import * as T from './Loader.types';

function Loader(props: T.LoaderProps) {
  const { className, isContainer } = props;

  if (isContainer) {
    return (
      <S.Container className={className}>
        <S.Loader />
      </S.Container>
    );
  }

  return <S.Loader className={className} />;
}

const defaultProps: T.DefaultProps = {
  isContainer: false,
};

Loader.defaultProps = defaultProps;

export default Loader;
