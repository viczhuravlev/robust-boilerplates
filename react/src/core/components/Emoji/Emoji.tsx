import React from 'react';

import * as T from './Emoji.types';

function Emoji(props: T.EmojiProps): JSX.Element {
  const { label, children, onClick, className, ...otherProps } = props;

  return (
    <span
      role="presentation"
      onClick={onClick}
      className={className}
      aria-label={label}
      {...otherProps}
    >
      {children}
    </span>
  );
}

export default Emoji;
