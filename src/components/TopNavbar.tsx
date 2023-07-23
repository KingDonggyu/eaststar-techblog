'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function TopNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 border-b border-gray-200 border-solid">
      <nav className="max-w-default m-auto p-4 flex justify-between items-center">
        <Link href="/" aria-label="홈페이지로 이동" aria-current="page" tabIndex={0} className="text-xl font-bold">
          개발자 동쪽별
        </Link>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
