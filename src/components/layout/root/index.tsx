'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from 'components/layout/navbar';
import { Footer } from 'components/layout/footer';
import { Providers } from './providers';
import { GA } from './google-analytics';

export function Root({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/portfolio') {
    return <main className="p-0 max-w-full w-full">{children}</main>;
  }

  return (
    <>
      {!process.env.NEXT_PUBLIC_IS_LOCAL && <GA />}
      <Providers>
        <Navbar />
        <main className="m-auto py-20 px-[24px] w-full">{children}</main>
        <Footer />
      </Providers>
    </>
  );
}
