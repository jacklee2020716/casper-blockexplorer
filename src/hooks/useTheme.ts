import { useCallback } from 'react';

import useLocalStorage from './useLocalStorage';

export default function useTheme() {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage<boolean>(
    'theme',
    darkThemeMq.matches,
  );
  darkThemeMq.onchange = (e) => {
    if (e.matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };

  const isDark = theme;
  const isLight = !isDark;

  const toggle = useCallback(() => setTheme(!theme), [setTheme, theme]);

  return { isDark, isLight, toggle };
}
