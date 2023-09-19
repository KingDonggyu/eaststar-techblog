import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import { ClockIcon } from './Icons';

export function PostHeader({ title, createdAt, tags }: Post) {
  return (
    <header className="border-b-2 border-primary pb-10 mb-14">
      <div>
        {tags.map(tag => (
          <Link key={tag} href="" className="!no-underline border mr-3 px-3 py-2 rounded-full text-sm">
            #{tag}
          </Link>
        ))}
      </div>
      <h1>{title}</h1>
      <div>
        <ClockIcon className="w-5 inline-block align-middle mr-1" />
        <span className="align-middle">{createdAt}</span>
      </div>
    </header>
  );
}
