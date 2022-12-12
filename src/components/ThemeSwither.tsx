import React, { useEffect } from 'react';

import { themeChange } from 'theme-change';

import { useTheme } from '@/hooks';

import { DarkIcon, LightIcon } from './Svg';

export default function ThemeSwither() {
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div onClick={toggle}>
      <button
        data-set-theme={isDark ? 'light' : 'dark'}
        data-act-class="ACTIVECLASS"
      >
        {isDark ? <DarkIcon /> : <LightIcon />}
      </button>
    </div>
  );
}
