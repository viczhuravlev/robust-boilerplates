import { styled } from '@linaria/react';

export const SwitchButton = styled.span`
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
