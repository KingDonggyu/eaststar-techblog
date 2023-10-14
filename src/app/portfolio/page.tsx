import 'styles/portfolio.css';
import { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Portfolio - 개발자 동쪽별',
  description: '저를 소개합니다.',
};

export default function Portfolio() {
  return <Client />;
}
