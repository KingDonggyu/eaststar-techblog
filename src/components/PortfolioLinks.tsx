import { ReactNode } from 'react';
import Link from 'next/link';
import { GitHubIcon, MailIcon, WriteIcon } from './Icons';

export function PortfolioLinks() {
  return (
    <nav className="flex justify-center items-center gap-10">
      <LinkItemWrapper name="GitHub">
        <Link href="https://github.com/KingDonggyu" target="_blank" aria-label="GitHub 프로필로 이동">
          <GitHubIcon className="w-7 h-7" />
        </Link>
      </LinkItemWrapper>
      <LinkItemWrapper name="Blog">
        <Link href="https://east-star.tistory.com" target="_blank" aria-label="Tistory 블로그로 이동">
          <WriteIcon className="w-7 h-7" />
        </Link>
      </LinkItemWrapper>
      <LinkItemWrapper name="Email">
        <Link href="mailto:dgkim69166916@gmail.com" target="_blank" aria-label="이메일 작성으로 이동">
          <MailIcon className="w-7 h-7" />
        </Link>
      </LinkItemWrapper>
    </nav>
  );
}

function LinkItemWrapper({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <span className="text-sm font-bold">{name}</span>
    </div>
  );
}
