'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { TopNavbar } from './TopNavbar';
import { Footer } from './Footer';

export function PageLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/portfolio') {
    return <main className="p-0 max-w-full w-full">{children}</main>;
  }

  return (
    <>
      <TopNavbar />
      <main className="m-auto py-20 px-[24px] w-full">{children}</main>
      <Footer />
    </>
  );
}
