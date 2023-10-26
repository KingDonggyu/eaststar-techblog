import 'styles/globals.css';
import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import { Root } from 'components/layout/root';

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-gothic',
});

export const metadata: Metadata = {
  title: '개발자 동쪽별',
  description: '',
  viewport: { width: 'device-width', initialScale: 1 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={nanumGothic.variable}>
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
