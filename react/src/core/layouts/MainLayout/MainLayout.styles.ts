import { styled } from '@linaria/react';

import RouterLinkOrigin from '@core/components/RouterLink';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const RouterLink = styled(RouterLinkOrigin)`
  font-size: 2rem;
`;
