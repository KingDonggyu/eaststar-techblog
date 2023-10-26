'use client';

import Link from 'next/link';
import { ThemeToggle } from '../../theme-toggle';

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-theme-light dark:bg-theme-dark border-b border-line z-10">
      <nav className="max-w-default m-auto p-4 flex justify-between items-center">
        <Link
          href="/"
          aria-label="홈페이지로 이동"
          aria-current="page"
          tabIndex={0}
          className="text-xl font-bold no-underline hover:text-inherit"
        >
          개발자 동쪽별 💫
        </Link>
        <div className="flex items-center gap-7">
          <Link
            href="/resume"
            aria-label="이력서 페이지로 이동"
            tabIndex={0}
            className="font-bold no-underline hover:text-inherit"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
