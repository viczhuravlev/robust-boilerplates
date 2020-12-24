import React, { useCallback, useState } from 'react';

import * as Theme from '@/utils/theme';

import * as T from './ThemeSwitcher.types';
import * as S from './ThemeSwitcher.styles';

function ThemeSwitcher(props: T.ThemeSwitcherProps) {
  const { className } = props;

  const [theme, setTheme] = useState<Theme.ThemeMode>(Theme.getCurrentThemeMode());

  const onSwitchOnThemeClick = useCallback(() => {
    const currentTheme = Theme.switchOnTheme();

    setTheme(currentTheme);
  }, [theme]);

  const isLight = theme === Theme.ThemeMode.light;

  return (
    <S.SwitchButton
      role="img"
      onClick={onSwitchOnThemeClick}
      className={className}
      data-moon={isLight ? '🌑' : '🌕'}
      aria-label="Moon"
    >
      {isLight ? '🌓' : '🌗'}
    </S.SwitchButton>
  );
}

export default ThemeSwitcher;
