import { styled } from '@linaria/react';

import { Emoji } from '../Emoji';

export const SwitchButton = styled(Emoji)`
  position: relative;

  display: inline-block;

  font-size: 2rem;

  cursor: pointer;

  &:after {
    position: absolute;
    top: 0;
    left: 0;

    content: attr(data-moon);

    opacity: 0;

    transition: opacity 0.3s;
  }

  &:hover:after {
    opacity: 1;
  }
`;
