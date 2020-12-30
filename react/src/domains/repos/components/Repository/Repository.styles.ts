import { styled } from '@linaria/react';

export const Repository = styled.li`
  & + & {
    margin-top: 2rem;
  }
`;

export const License = styled.span`
  color: var(--font-color-secondary);
`;
