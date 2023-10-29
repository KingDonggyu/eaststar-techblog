import 'styles/portfolio.css';
import { Metadata } from 'next';
import { PortfolioProject } from 'components/portfolio/projects';

export const metadata: Metadata = {
  title: 'Portfolio - 개발자 동쪽별',
  description: '저를 소개합니다.',
};

export default function Portfolio() {
  return (
    <div id="portfolio" className="px-28 py-[90px] max-w-[1440px] m-auto sm:px-[30px]">
      <PortfolioProject />
    </div>
  );
}
