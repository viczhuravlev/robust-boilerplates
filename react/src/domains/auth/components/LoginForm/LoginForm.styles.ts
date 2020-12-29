import { styled } from '@linaria/react';

export const Form = styled.form`
  display: flex;

  align-items: flex-end;
`;

export const Input = styled.input`
  height: 3rem;
  padding: 0.5rem 1rem;

  font-size: 1.5rem;
  color: var(--font-color);

  background-color: var(--font-color-secondary);
  border: none;
  border-radius: 0.25rem 0 0 0.25rem;
`;

export const Label = styled.label`
  display: flex;

  flex-direction: column;
`;

export const Button = styled.button`
  height: 3rem;
  padding: 0.5rem 1rem;

  font-size: 1rem;
  color: var(--font-color);

  cursor: pointer;

  background-color: var(--primary-color);
  border: none;
  border-radius: 0 0.25rem 0.25rem 0;
`;
