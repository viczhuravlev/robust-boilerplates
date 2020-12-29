import { SyntheticEvent } from 'react';

export interface EmojiProps {
  label: string;
  onClick?: (event: SyntheticEvent) => void;
  children: string;
  className?: string;
}
