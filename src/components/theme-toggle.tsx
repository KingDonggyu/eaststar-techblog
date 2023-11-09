'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { THEME } from 'lib/constants';

interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setTheme(theme === THEME.dark ? THEME.light : THEME.dark);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="다크 모드 적용"
      tabIndex={0}
      onClick={handleClick}
      className={clsx('z-10', className)}
    >
      {theme === THEME.dark ? <SunIcon className="w-7" /> : <MoonIcon className="w-6" />}
    </button>
  );
}
