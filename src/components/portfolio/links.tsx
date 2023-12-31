import { ReactNode } from 'react';
import Link from 'next/link';
import { GitHubIcon, MailIcon, DesktopIcon, WriteIcon } from 'components/icons';

interface PortfolioLinksProps {
  large?: boolean;
  hasPortfolioLink?: boolean;
}

export function PortfolioLinks({ large = false, hasPortfolioLink = false }: PortfolioLinksProps) {
  const iconStyle = large ? 'w-20 h-20' : 'w-7 h-7';

  return (
    <nav className={`flex justify-center items-center ${large ? 'gap-20' : 'gap-10'}`}>
      <LinkItemWrapper name="GitHub" large={large}>
        <Link href="https://github.com/KingDonggyu" target="_blank" aria-label="GitHub 프로필로 이동">
          <GitHubIcon className={iconStyle} />
        </Link>
      </LinkItemWrapper>
      <LinkItemWrapper name="Blog" large={large}>
        <Link href="/" target="_blank" aria-label="Tistory 블로그로 이동">
          <WriteIcon className={iconStyle} />
        </Link>
      </LinkItemWrapper>
      {hasPortfolioLink && (
        <LinkItemWrapper name="Portfolio" large={large}>
          <Link href="/portfolio" target="_blank" aria-label="포트폴리오로 이동">
            <DesktopIcon className={iconStyle} />
          </Link>
        </LinkItemWrapper>
      )}
      <LinkItemWrapper name="Email" large={large}>
        <Link href="mailto:dgkim69166916@gmail.com" target="_blank" aria-label="이메일 작성으로 이동">
          <MailIcon className={iconStyle} />
        </Link>
      </LinkItemWrapper>
    </nav>
  );
}

interface LinkItemWrapperProps {
  name: string;
  large: boolean;
  children: ReactNode;
}

function LinkItemWrapper({ name, large, children }: LinkItemWrapperProps) {
  const textStyle = large ? 'text-3xl' : 'text-sm';

  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <span className={`${textStyle} font-bold`}>{name}</span>
    </div>
  );
}
