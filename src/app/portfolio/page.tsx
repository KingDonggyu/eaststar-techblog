import 'styles/portfolio.css';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Portfolio - 개발자 동쪽별',
  description: '저를 소개합니다.',
};

const client = dynamic(() => import('./client'), { ssr: false });

export default client;
