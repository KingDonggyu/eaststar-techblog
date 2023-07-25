'use client';

import Link from 'next/link';

// const mock = [
//   {
//     id: 0,
//     emoji: '🍀',
//     title: '변경에 유연하게 React Query를 커스텀 해보자 (with NextJS)',
//     introduce: '프론트엔드에 관한 깊은 이야기를 나눌 수 있는 오프라인 커뮤니티, 프론트엔드 다이빙 클럽을 소개합니다.',
//     date: '2023.07.23',
//   },
//   {
//     id: 1,
//     emoji: '🏄‍♂️',
//     title: '마우스 이벤트, 제대로 사용하고 계신가요? - 클릭과 터치',
//     introduce: "'세 줄 독후감' 웹사이트를 운영하며, 최근 사용자들에게 한 오류를 제보 받았습니다.",
//     date: '2023.07.20',
//   },
// ];

export function PostList() {
  return (
    <p className="text-xl text-center pt-10">블로그 개발 중..</p>
    // <section>
    //   <ul className="flex flex-col gap-12">
    //     {mock.map(post => (
    //       <PostItem key={post.id} {...post} />
    //     ))}
    //   </ul>
    // </section>
  );
}

interface PostItemProps {
  id: number;
  emoji: string;
  title: string;
  introduce: string;
  date: string;
}

export function PostItem({ emoji, title, introduce, date }: PostItemProps) {
  return (
    <li>
      <Link href="/" aria-label="" tabIndex={0} className="group flex items-center gap-7">
        <div className="text-7xl p-8 rounded-full border border-line transition-colors group-hover:border-primary">
          {emoji}
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold leading-snug transition-colors group-hover:text-primary">{title}</h3>
          <p className="leading-normal">{introduce}</p>
          <p className="text-sm text-date">{date}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostList;
