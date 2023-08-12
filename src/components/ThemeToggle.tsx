'use client';

import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = { light: 'light', dark: 'dark' };
  const { theme: currentTheme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setTheme(currentTheme === theme.dark ? theme.light : theme.dark);
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
      className={`${className} z-10`}
    >
      {currentTheme === theme.dark ? <SunIcon className="w-7" /> : <MoonIcon className="w-6" />}
    </button>
  );
}
