import { styled } from '@linaria/react';

export const Container = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 100%;

  height: 100%;
`;

export const Loader = styled.div`
  position: relative;

  display: block;

  width: 1.5rem;

  height: 1.5rem;

  &:before {
    position: absolute;

    top: 0;

    left: 0;

    display: block;

    width: 100%;

    height: 100%;

    margin: auto;

    content: '';

    border: 2px solid var(--font-color-secondary);
    border-bottom: 2px solid var(--primary-color);

    border-radius: 50%;

    animation: loop 1.5s linear infinite;
  }

  @keyframes loop {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
