import { styled } from '@linaria/react';

export const Nav = styled.nav`
  flex: 0 0 auto;

  padding: 3rem;
`;

export const NavList = styled.ul`
  display: flex;

  flex-flow: row-reverse;

  align-items: center;
  justify-content: flex-start;

  padding: 0;

  list-style: none;
`;

export const NavListItem = styled.li`
  margin: 0 1.5rem;

  &:first-child {
    margin-right: 0;
  }
`;
