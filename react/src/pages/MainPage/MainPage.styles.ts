import { styled } from '@linaria/react';

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;

  height: 100px;
`;

export const TextContainer = styled.div`
  width: 360px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: right;
`;

export const Description = styled.div`
  width: 360px;

  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--font-color-secondary);
`;

export const Partition = styled.div`
  width: 5px;
  height: 100%;
  margin: 0 50px;

  background-color: #f7981c;
`;
