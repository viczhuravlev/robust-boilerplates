import { styled } from '@linaria/react';

import { Emoji } from '@core/components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const TextLink = styled(Emoji)`
  font-size: 2rem;
`;
