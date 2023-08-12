import 'styles/globals.css';
import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import { Providers } from 'components/Providers';
import { PageLayout } from 'components/PageLayout';
import { GA } from 'components/GA';

const NanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: '개발자 동쪽별',
  description: '',
  viewport: { width: 'device-width', initialScale: 1 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={NanumGothic.className}>
        <Providers>
          {!process.env.NEXT_PUBLIC_IS_LOCAL && <GA />}
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}
