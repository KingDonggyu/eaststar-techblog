'use client';

import { ReactNode } from 'react';
import { TopNavbar } from './TopNavbar';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNavbar />
      <main className=" m-auto py-20 px-[24px] w-full">{children}</main>
    </>
  );
}
